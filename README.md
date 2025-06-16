INFORME DEL PROYECTO - CARPINTERIA INDECOR AC

OBJETIVO: Diseñar y desarrollar una página web moderna, atractiva y funcional para la carpintería Indecor AC, que permita a los usuarios conocer los servicios, ver ejemplos de trabajos, contactar al equipo y seguir sus redes sociales.

ESTRUCTURA DEL SITIO 
Se utilizó una estructura semántica adecuada:
<header>: Contiene el logo y un menú de navegación responsive.
<main>: Contiene las secciones principales:
*Inicio con un video promocional 
*Servicios ofrecidos
*Galeria de imagenes 
*Formulario de contacto
*Redes sociales
<footer>: Pie de página con derechos de autor.

Se utilizaron correctamente los encabezados <h1>, <h2>, y <h3> para organizar jerárquicamente la información.

Incluye las siguientes etiquetas meta:
viewport: para diseño responsive.
description: para optimización SEO.

DISEÑO CSS- MOBILE FIRST + RESPONSIVE
El diseño es completamente responsive:
*Uso de media queries para adaptar la vista desde móviles hasta escritorio.
*Estilo visual acorde a una carpintería: tonos madera, fondo claro y tipografía limpia.
*Se aplicó centrado visual de todo el contenido para mayor armonía.
*Uso de transiciones y animaciones suaves en botones y enlaces (hover, focus).
*Diseño modular con selectores bien organizados (clases y pseudoclases).
*Eliminación de estilos inline para mantener el código limpio y reutilizable.

FUNCIONALIDAD JAVASCRIPT
El proyecto incluye scripts para mejorar la experiencia del usuario:
*Menú toggle para navegación móvil usando addEventListener y classList.toggle.
*Validación de formulario que asegura que todos los campos requeridos estén completos antes de enviarse.
*Uso de document.querySelector, condicionales y estructura lógica separada del HTML (JS en archivo externo).

REDES SOCIALES
Se añadieron botones con íconos personalizados y estilos circulares para:
*WhatsApp con enlace directo a chat.
*Instagram con enlace al perfil de Indecor AC.

FORMULARIO DE CONTACTO
Formulario elegante y centrado con:
*Campos para nombre, correo, teléfono y mensaje.
*Estilos interactivos en campos (:focus) y botón animado (hover).
*Enlace funcional a Formspree para el envío de mensajes.

ARCHIVOS ESTRUCTURADOS
*index.html: Estructura principal del sitio.
*css/styles.css: Todos los estilos en un archivo externo y organizado.
*js/script.js: Código JS para interacciones y validaciones.
*assets/img/: Carpeta para imágenes.
*assets/videos/: Carpeta para videos.