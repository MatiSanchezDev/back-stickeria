# 🛠️ Stickeria – Backend de Gestión de Pedidos

Este proyecto constituye el backend de la aplicación [**front-Stickeria**](https://github.com/MatiSanchezDev/front-stickeria/), desarrollado con **Node.js**, **TypeScript** y **Express**. Proporciona una API RESTful MVC para gestionar pedidos, mensajes con clientes y consultas de ingresos mensuales, facilitando la administración eficiente de una tienda de stickers.

---

## 📚 Tabla de Contenidos

- 🧩 [Funcionalidades](#funcionalidades)
- 🧪 [Tecnologías Utilizadas](#tecnologías-utilizadas)
- 🔧 [Instalación](#instalación)
- 🚀 [Uso](#uso)
- 🛠️ [To-Do / Mejoras Futuras](#to-do--mejoras-futuras)
- 📬 [Contacto](#contacto)

---

## <a name="funcionalidades"></a>🧩 Funcionalidades

- 📦 **Gestión de Pedidos:** Creación, actualización y eliminación de pedidos.
- 💬 **Mensajes con Clientes:** Comunicación detallada entre la tienda y los clientes.
- 📈 **Consultas de Ingresos Mensuales:** Generación de reportes financieros mensuales.
- 🔐 **Autenticación y Autorización:** Implementación de JWT para asegurar las rutas.
- 🗂️ **Estructura Modular:** Código organizado en controladores, servicios y rutas para facilitar el mantenimiento.

---

## <a name="tecnologías-utilizadas"></a>🧪 Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución para JavaScript en el servidor.
- **TypeScript:** Superset de JavaScript que añade tipado estático.
- **Express:** Framework minimalista para aplicaciones web.
- **Supabase:** Base de datos alternativa a Firebase con capa GRATUITA.
- **ESLint:** Herramienta para mantener la calidad del código.
- **Dotenv:** Gestión de variables de entorno.
- **Zod:** Validación de esquemas con inferencia de tipos estáticos basada en TypeScript.

---

## <a name="instalación"></a>🔧 Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/MatiSanchezDev/back-stickeria.git
   cd back-stickeria
2. Instalar dependencias:
    ```bash
   npm install
   ```
>[!IMPORTANT]
> Aplicacion creada con [Supabase](https://supabase.com/), debe crear su cuenta logearse e ingresar los datos generados en la variable .env explicada con detalle abajo.
3. Configurar variables de entorno:
   > Crear un archivo .env en la raíz del proyecto y añadir las siguientes variables:
   ```bash
   PORT=3002
   SUPABASE_URL=(Pegar los datos brindados luego de crear un proyecto en Supabase)
   SUPABASE_ANON_KEY=(Pegar los datos brindados luego de crear un proyecto en Supabase)
   ```
4. Iniciar el servidor:
      ```bash
      npm run dev
      ```

---

## <a name="uso"></a>🚀Uso
>[!IMPORTANT]
> Para que funcione tener en cuenta lo siguiente:

1. Debe clonar tambien el repositorio de [Back-Stickeria](https://github.com/MatiSanchezDev/back-stickeria) y seguir los pasos del README.md de dicho repositorio.

2. En el front-stickeria un archivo en la raiz del proyecto llamado ".env" y agregar lo siguiente:

```bash
   NEXT_PUBLIC_API_BASE=http://localhost:3002 (Puerto en el que esté corriendo tu backend)
   ```
3. Probar la app.

---

## <a name="to-do--mejoras-futuras"></a>🛠️ To-Do / Mejoras Futuras
* Ruta para mostrar los ingresos de cada mes.

---

## <a name="contacto"></a>📬 Contacto
Matias N. Sanchez - [sanchezmatidev@gmail.com
](sanchezmatidev@gmail.com
)  
GitHub: [MatiSanchezDev](https://github.com/MatiSanchezDev)

