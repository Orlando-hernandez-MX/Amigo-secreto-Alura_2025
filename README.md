# Amigo Secreto Alura 2025

Este proyecto es una aplicación web para organizar un juego de "Amigo Secreto". Permite a los usuarios agregar nombres de amigos y realizar un sorteo para determinar quién será el amigo secreto de cada participante.

# Descripción de los archivos del proyecto.

### `index.html`

Este archivo contiene la estructura HTML de la aplicación. Incluye:

- **Meta etiquetas**: Configuración de codificación y viewport.
- **Enlaces de estilos**: Enlace al archivo `style.css`.
- **Contenido principal**: Un título, una imagen representativa, una sección de entrada para agregar nombres de amigos, una lista para mostrar los nombres agregados, un botón para iniciar el sorteo y un mensaje de alerta.

### `style.css`

Este archivo contiene los estilos CSS para la aplicación. Incluye:

- **Variables CSS**: Definición de colores principales y secundarios.
- **Estilos generales**: Reset de márgenes y padding, configuración de box-sizing.
- **Estilos del cuerpo**: Configuración de altura, color de fondo y alineación del contenido.
- **Estilos de la cabecera**: Alineación y espaciado del título y la imagen.
- **Estilos de la sección de entrada**: Configuración de fondo, bordes, alineación y espaciado.
- **Estilos de los títulos**: Configuración de fuentes, tamaños y colores.
- **Estilos de los contenedores de entrada y botón**: Alineación y espaciado de los elementos de entrada y botones.
- **Estilos de las listas**: Configuración de listas sin estilo y estilos de texto.
- **Estilos del botón de sorteo**: Configuración de fondo, color, tamaño y efectos de hover.

### `app.js`

Este archivo contiene la lógica JavaScript de la aplicación. Incluye:

- **Variables y elementos DOM**: Definición de variables y obtención de elementos del DOM.
- **Eventos**: Configuración de eventos para la entrada de texto y botones.
- **Funciones**:
  - `showAlert(message)`: Muestra un mensaje de alerta en caso de error en la entrada.
  - `addFriend()`: Agrega un amigo a la lista después de validar la entrada.
  - `manageButtons(disable)`: Gestiona el estado de los botones.
  - `drawFriend()`: Realiza el sorteo del amigo secreto y muestra el resultado.

## Cómo Usar

1. **Abrir el archivo `index.html`** en un navegador web.
2. **Agregar nombres de amigos** en el campo de entrada y hacer clic en el botón "Añadir".
3. **Iniciar el sorteo** haciendo clic en el botón "Iniciar Juego" una vez que haya al menos 3 amigos en la lista.
4. **Ver el resultado** del sorteo en la pantalla.

## Recursos

- **Imágenes**: Las imágenes utilizadas en la aplicación se encuentran en el directorio `assets/` y fueron proporcionadas por Alura para los fines aquí descritos.
