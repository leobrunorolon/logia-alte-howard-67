import { useState, type FormEvent } from 'react';

// Google Form pre-filled URL endpoint
// Reemplazá con tu Form ID y los entry IDs de cada campo
const GOOGLE_FORM_ACTION = import.meta.env.VITE_GOOGLE_FORM_URL || '';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  edad: string;
  profesion: string;
  mensaje: string;
}

const initialForm: FormData = {
  nombre: '',
  email: '',
  telefono: '',
  edad: '',
  profesion: '',
  mensaje: '',
};

// Mapeo de campos del form a los entry IDs de Google Forms
// Estos IDs los sacás inspeccionando el HTML del Google Form
const FIELD_MAP: Record<keyof FormData, string> = {
  nombre: import.meta.env.VITE_FIELD_NOMBRE || 'entry.0',
  email: import.meta.env.VITE_FIELD_EMAIL || 'entry.1',
  telefono: import.meta.env.VITE_FIELD_TELEFONO || 'entry.2',
  edad: import.meta.env.VITE_FIELD_EDAD || 'entry.3',
  profesion: import.meta.env.VITE_FIELD_PROFESION || 'entry.4',
  mensaje: import.meta.env.VITE_FIELD_MENSAJE || 'entry.5',
};

export default function Contacto() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formData = new URLSearchParams();
      (Object.keys(form) as (keyof FormData)[]).forEach((key) => {
        formData.append(FIELD_MAP[key], form[key]);
      });

      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      // Google Forms no devuelve respuesta con no-cors,
      // pero si no hubo error de red, asumimos éxito
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Iniciá el camino</h2>
          <p>
            Si sentís inquietud por el crecimiento personal y el compromiso con valores
            universales, este es el primer paso. Completá el formulario y nos pondremos
            en contacto con vos.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">📍</div>
              <span>Jujuy, Argentina</span>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">✉️</div>
              <span>almirantehoward67@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Envianos tu consulta</h3>
          <p className="subtitle">Todos los campos marcados son obligatorios.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input id="nombre" name="nombre" type="text" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@email.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} placeholder="+54 11 1234-5678" />
              </div>
              <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <input id="edad" name="edad" type="number" min="18" value={form.edad} onChange={handleChange} placeholder="Edad" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="profesion">Profesión / Ocupación</label>
              <input id="profesion" name="profesion" type="text" value={form.profesion} onChange={handleChange} placeholder="Tu profesión" />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">¿Por qué te interesa conocer la Masonería? *</label>
              <textarea id="mensaje" name="mensaje" required value={form.mensaje} onChange={handleChange} placeholder="Contanos brevemente tu motivación..." />
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar consulta'}
            </button>

            {status === 'success' && (
              <div className="form-message success" role="alert">
                ¡Gracias por tu interés! Nos pondremos en contacto pronto.
              </div>
            )}
            {status === 'error' && (
              <div className="form-message error" role="alert">
                Hubo un error al enviar. Por favor intentá nuevamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
