# Configuración de Google Forms

## 1. Crear el Google Form

Creá un Google Form con estos campos (en este orden):
1. Nombre completo (respuesta corta)
2. Correo electrónico (respuesta corta)
3. Teléfono (respuesta corta)
4. Edad (respuesta corta)
5. Profesión / Ocupación (respuesta corta)
6. ¿Por qué te interesa conocer la Masonería? (párrafo)

## 2. Obtener los Entry IDs

1. Abrí el form en modo preview (ojo del preview)
2. Click derecho > "Ver código fuente de la página" (Ctrl+U)
3. Buscá `entry.` en el código fuente
4. Vas a encontrar IDs como `entry.1234567890` para cada campo
5. Anotá cada uno en orden

## 3. Obtener la URL del Form

La URL del form en modo preview se ve así:
```
https://docs.google.com/forms/d/e/XXXXXXX/viewform
```

La URL para enviar datos es la misma pero terminada en `/formResponse`:
```
https://docs.google.com/forms/d/e/XXXXXXX/formResponse
```

## 4. Configurar el .env

Editá el archivo `.env` en la raíz del proyecto con tus valores:

```env
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/TU_FORM_ID/formResponse

VITE_FIELD_NOMBRE=entry.111111111
VITE_FIELD_EMAIL=entry.222222222
VITE_FIELD_TELEFONO=entry.333333333
VITE_FIELD_EDAD=entry.444444444
VITE_FIELD_PROFESION=entry.555555555
VITE_FIELD_MENSAJE=entry.666666666
```

## 5. Ejecutar

```bash
npm run dev
```

Las respuestas van a aparecer en la pestaña "Respuestas" del Google Form,
y también podés vincularlas a un Google Sheet desde ahí.
