# YaviFood API REST

Backend para un sistema de pedidos de comida desarrollado con Node.js, Express y MongoDB.

## 🚀 Características

- Autenticación y autorización de usuarios.
- Gestión de menú y platillos.
- Sistema de pedidos.
- Documentación API con Swagger.
- Base de datos MongoDB.

---

## 📋 Requisitos Previos

- **Node.js** >= 20.x
- **MongoDB** (local o Atlas)
- **npm** o **yarn**

---

## 🔧 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <repository-url>
   cd api-rest-yavifood
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   # o si usas yarn:
   yarn install
   ```

3. **Crear archivo `.env` en la raíz del proyecto con las siguientes variables:**
   ```env
   MONGO_URI=mongodb+srv://tu_usuario:tu_contraseña@cluster0.xxx.mongodb.net/
   JWT_SECRET=tu_clave_secreta
   PORT=5000
   ```

4. **Ejecutar la aplicación:**
   - **Modo desarrollo:**
     ```bash
     npm run dev
     ```
   - **Producción:**
     ```bash
     npm start
     ```

---

## 📚 Documentación API

La documentación está disponible en Swagger. Una vez el servidor esté en ejecución, accede a:

```
http://localhost:5000/documentacion
```

---

## 🛠️ Endpoints Principales

### **Usuarios**

- **POST** `/api/users/login` - Iniciar sesión.
- **POST** `/api/users/register` - Registrar usuario.
- **GET** `/api/users/profile` - Obtener perfil del usuario autenticado.

### **Platillos**

- **GET** `/api/foods` - Listar todos los platillos.
- **GET** `/api/foods/:foodId` - Obtener información de un platillo.
- **POST** `/api/foods` - Crear un nuevo platillo.
- **PUT** `/api/foods/:foodId` - Actualizar un platillo existente.
- **DELETE** `/api/foods/:foodId` - Eliminar un platillo.

### **Pedidos**

- **POST** `/api/orders/create` - Crear un pedido.
- **GET** `/api/orders` - Listar todos los pedidos.
- **GET** `/api/orders/track/:id` - Seguir el estado de un pedido.

---

## 🔐 Variables de Entorno

| Variable      | Descripción                           |
|---------------|---------------------------------------|
| `MONGO_URI`   | URL de conexión para la base de datos MongoDB. |
| `JWT_SECRET`  | Clave secreta para generar tokens JWT.|
| `PORT`        | Puerto donde se ejecuta el servidor (default: 5000).|

---

## ⚙️ Tecnologías

- **Express**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB.
- **JWT**: Manejo de autenticación mediante tokens.
- **Swagger**: Generación de documentación interactiva para APIs.

---

## 👨‍💻 Contribuir

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección.
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y commitea.
   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```
4. Sube los cambios a tu repositorio remoto.
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un Pull Request.

---



---

