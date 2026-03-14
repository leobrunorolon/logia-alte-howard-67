import { Link } from 'react-router-dom';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export default function Home() {
  useScrollAnimations();

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow animate-in">Resp∴ Log∴ Almirante Howard N° 67</span>
          <h1 className="animate-in animate-in-delay-1">
            ¿Y si el verdadero progreso comenzara por uno mismo?
          </h1>
          <p className="hero-subtitle animate-in animate-in-delay-2">
            Vivimos tiempos de cambios profundos. Avanza la tecnología, cambian las estructuras,
            pero la pregunta esencial permanece: ¿estamos creciendo también como personas?
          </p>
          <div className="hero-buttons animate-in animate-in-delay-3">
            <Link to="/contacto" className="btn-primary">Contactanos</Link>
            <a href="#que-es" className="btn-outline">Conocé más</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Descubrí</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Qué es */}
      <section className="section" id="que-es">
        <div className="reveal">
          <span className="section-label">Sobre nosotros</span>
          <h2>¿Qué es la Masonería?</h2>
          <p className="section-desc">
            Una institución con siglos de historia dedicada a la formación moral e intelectual
            de quienes buscan contribuir al bien de la Humanidad.
          </p>
        </div>
        <div className="intro-grid">
          <div className="intro-text reveal reveal-left">
            <p>
              La Masonería es una sociedad filosófica, filantrópica y progresista que propone
              un camino de formación moral e intelectual.
            </p>
            <p>
              Una escuela simbólica que invita a trabajar sobre uno mismo para contribuir,
              desde allí, al bien de la Humanidad.
            </p>
            <p>
              Es un lugar de reflexión, disciplina interior, estudio y fraternidad entre
              hombres libres y de buenas costumbres que desean perfeccionarse y servir.
            </p>
          </div>
          <div className="intro-visual reveal reveal-right reveal-stagger">
            <div className="stat-card">
              <div className="stat-icon">⚖️</div>
              <div className="stat-content">
                <h4>Filosófica</h4>
                <p>Búsqueda constante de la verdad y el conocimiento</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🤝</div>
              <div className="stat-content">
                <h4>Filantrópica</h4>
                <p>Compromiso con el bienestar de la sociedad</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔭</div>
              <div className="stat-content">
                <h4>Progresista</h4>
                <p>Impulso hacia el avance moral y social</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué NO es */}
      <section className="section-full section-dark">
        <div className="section-inner">
          <div className="reveal">
            <span className="section-label">Claridad</span>
            <h2>Lo que no somos</h2>
            <p className="section-desc">
              Es importante entender qué no es la Masonería para comprender mejor su verdadera esencia.
            </p>
          </div>
          <div className="not-section reveal reveal-stagger">
            <div className="not-card">
              <div className="not-icon">🎭</div>
              <h4>No es un club social</h4>
              <p>No buscamos el entretenimiento sino el crecimiento interior y colectivo.</p>
            </div>
            <div className="not-card">
              <div className="not-icon">⚖️</div>
              <h4>No es un espacio de privilegios</h4>
              <p>No otorgamos ventajas personales. Promovemos la igualdad y el mérito.</p>
            </div>
            <div className="not-card">
              <div className="not-icon">🕊️</div>
              <h4>No es un ámbito político</h4>
              <p>No participamos en política partidaria. Fomentamos el pensamiento libre.</p>
            </div>
          </div>
          <div className="is-statement reveal">
            <p>
              Es un lugar de reflexión, disciplina interior, estudio y fraternidad entre
              hombres libres y de buenas costumbres que desean perfeccionarse y servir.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section">
        <div className="reveal">
          <span className="section-label">Nuestra propuesta</span>
          <h2>Cuatro pilares de transformación</h2>
          <p className="section-desc">
            Hoy, como ayer, la propuesta sigue siendo la misma: un camino de trabajo personal
            con impacto en la comunidad.
          </p>
        </div>
        <div className="pilares-grid reveal reveal-stagger">
          <div className="pilar-card">
            <div className="pilar-number">01</div>
            <h3>Carácter</h3>
            <p>Trabajar sobre el carácter como base del crecimiento personal.</p>
          </div>
          <div className="pilar-card">
            <div className="pilar-number">02</div>
            <h3>Tolerancia</h3>
            <p>Ejercitar la tolerancia como virtud fundamental de convivencia.</p>
          </div>
          <div className="pilar-card">
            <div className="pilar-number">03</div>
            <h3>Fraternidad</h3>
            <p>Practicar la fraternidad como vínculo entre quienes buscan el bien común.</p>
          </div>
          <div className="pilar-card">
            <div className="pilar-number">04</div>
            <h3>Justicia</h3>
            <p>Construir una sociedad más justa comenzando por la propia transformación.</p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-full section-alt">
        <div className="section-inner" style={{ padding: '0 2rem' }}>
          <div className="reveal">
            <span className="section-label">Legado</span>
            <h2>Raíces en la historia argentina</h2>
            <p className="section-desc">
              A lo largo de la historia, hombres comprometidos con la libertad y el progreso
              encontraron en la Masonería un ámbito de formación y pensamiento.
            </p>
          </div>
          <div className="historia-content">
            <div className="historia-text reveal reveal-left">
              <p>
                La Masonería tuvo un rol fundamental en la construcción de las naciones
                modernas. En Argentina, muchos de los próceres que forjaron la independencia
                y las instituciones republicanas fueron masones comprometidos con los ideales
                de libertad, igualdad y fraternidad.
              </p>
              <p>
                Ese mismo espíritu de servicio y compromiso con el progreso humano sigue
                vigente hoy en cada logia del país.
              </p>
            </div>
            <div className="historia-figures reveal reveal-right reveal-stagger">
              <div className="figure-card">
                <div className="figure-avatar">MB</div>
                <div className="figure-info">
                  <h4>Manuel Belgrano</h4>
                  <p>Creador de la bandera, economista y patriota</p>
                </div>
              </div>
              <div className="figure-card">
                <div className="figure-avatar">SM</div>
                <div className="figure-info">
                  <h4>José de San Martín</h4>
                  <p>Libertador de Argentina, Chile y Perú</p>
                </div>
              </div>
              <div className="figure-card">
                <div className="figure-avatar">DS</div>
                <div className="figure-info">
                  <h4>Domingo F. Sarmiento</h4>
                  <p>Presidente, educador y escritor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="reveal">
          <span className="section-label">Sumate</span>
          <h2>¿Buscás algo más que pertenecer?</h2>
          <p>
            Si sentís inquietud por el crecimiento personal, el estudio filosófico y el
            compromiso con valores universales, podés contactarnos para conocer más sobre
            nuestro proceso de ingreso.
          </p>
          <p className="cta-quote">
            La puerta está abierta para quienes buscan algo más que pertenecer: buscan construirse.
          </p>
          <Link to="/contacto" className="btn-primary">Escribinos</Link>
        </div>
      </section>
    </main>
  );
}
