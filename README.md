# Blog Personal
Este proyecto es un sistema de gestión de contenido (CMS) simple para un blog personal con vistas diferenciadas para Autores y visitantes.

## Tecnologías Utilizadas

- Backend: Node.js con Express
- Frontend: React.js con Vite
- Base de Datos: MySQL
- Estilos: CSS personalizado
- Animaciones: Framer Motion

## Características

- Dos vistas diferentes: Autor y Visitante
- Lista de artículos con vista previa
- Creación de nuevos artículos (solo para Autores)
- Edición de artículos existentes (solo para Autores)
- Eliminación de artículos (solo para Autores)
- Diseño responsive
- Animaciones suaves para una mejor experiencia de usuario

## Vista Previa

![Vista previa del blog](./personal-blog.gif)

## Demo en Línea

Puedes ver una demostración en vivo de este proyecto en [https://test.nexwey.online/blog/](https://test.nexwey.online/blog/)

## Instalación

1. Clona este repositorio:
    ```
    git clone https://github.com/RobertoPantojaL/personal-blog.git
    ```

2. Navega al directorio del proyecto:
    ```
    cd blog-personal
    ```
3. Instala las dependencias del backend:
    ```
    npm install
    ```
4. Navega al directorio del cliente y instala las dependencias del frontend:
    ```
    cd client
    npm install
    ```
5. Vuelve al directorio raíz y crea un archivo `.env` con las siguientes variables:
    ```
    DB_HOST=localhost
    DB_USER=tu_usuario_mysql
    DB_PASSWORD=tu_contraseña_mysql
    DB_NAME=personal_blog
    PORT=5000
    ```
6. Crea la base de datos y la tabla en MySQL:
    ```sql
    CREATE DATABASE personal_blog;
    USE personal_blog;
    CREATE TABLE articles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    ```
## Uso

1. Inicia el servidor backend:

    ```
    npm run dev
    ```


2. En otra terminal, navega al directorio del cliente e inicia la aplicación React:

    ```
    cd client
    npm run dev
    ```


3. Abre tu navegador y visita `http://localhost:5173` on en la dirección que te proporcione vite para ver la aplicación.


## Estructura del Proyecto

- `App.jsx`: Componente principal que maneja las rutas y la navegación.
- `ArticleList.jsx`: Lista de artículos para Autores (permite crear, editar y eliminar).
- `ArticleListagent.jsx`: Lista de artículos para visitantes (solo lectura).
- `ArticleForm.jsx`: Formulario para crear y editar artículos.
- `ArticleDetail.jsx`: Detalle de artículo para Autores (incluye opciones de edición y eliminación).
- `ArticleDetailagent.jsx`: Detalle de artículo para visitantes (solo lectura).


## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de hacer un pull request.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)