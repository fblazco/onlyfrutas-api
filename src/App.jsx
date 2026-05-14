function App() {
  const endpoints = [
    {
      modulo: "Auth",
      metodo: "POST",
      ruta: "/api/auth/register",
      descripcion: "Registra un nuevo usuario en OnlyFrutas.",
      auth: "No",
      body: `{
  "username": "felipe",
  "nombre_visible": "Felipe",
  "correo": "felipe@mail.com",
  "password": "123456"
}`,
      respuesta: `{
  "token": "jwt...",
  "user": {
    "id": 1,
    "username": "felipe",
    "nombre_visible": "Felipe",
    "rol": "usuario"
  }
}`,
    },
    {
      modulo: "Auth",
      metodo: "POST",
      ruta: "/api/auth/login",
      descripcion: "Inicia sesión y retorna un token JWT.",
      auth: "No",
      body: `{
  "correo": "felipe@mail.com",
  "password": "123456"
}`,
      respuesta: `{
  "token": "jwt...",
  "user": {
    "id": 1,
    "username": "felipe",
    "rol": "usuario"
  }
}`,
    },
    {
      modulo: "Auth",
      metodo: "GET",
      ruta: "/api/auth/me",
      descripcion: "Obtiene la información del usuario logueado.",
      auth: "Sí",
      body: "No requiere body.",
      respuesta: `{
  "id": 1,
  "username": "felipe",
  "nombre_visible": "Felipe",
  "correo": "felipe@mail.com",
  "rol": "usuario"
}`,
    },
    {
      modulo: "Publicaciones",
      metodo: "GET",
      ruta: "/api/publicaciones",
      descripcion: "Obtiene las publicaciones para poblar la Main Page.",
      auth: "No",
      body: "No requiere body.",
      respuesta: `{
  "data": [
    {
      "id": 1,
      "tipo": "imagen",
      "es_venta": true,
      "cantidad_reacciones": 12,
      "autor": {
        "id": 3,
        "username": "frutas_pedro"
      },
      "imagen": {
        "descripcion": "Manzanas rojas recién cosechadas",
        "url_imagen": "https://..."
      }
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 20
}`,
    },
    {
      modulo: "Publicaciones",
      metodo: "GET",
      ruta: "/api/publicaciones/:id",
      descripcion: "Obtiene el detalle de una publicación específica.",
      auth: "No",
      body: "No requiere body.",
      respuesta: `{
  "id": 1,
  "tipo": "imagen",
  "es_venta": true,
  "autor": {
    "id": 3,
    "username": "frutas_pedro"
  },
  "contenido": {
    "descripcion": "Caja de frutillas frescas",
    "url_imagen": "https://..."
  }
}`,
    },
    {
      modulo: "Publicaciones",
      metodo: "POST",
      ruta: "/api/publicaciones",
      descripcion: "Crea una nueva publicación.",
      auth: "Sí",
      body: `{
  "tipo": "imagen",
  "es_venta": true,
  "descripcion": "Caja de frutillas frescas",
  "url_imagen": "https://..."
}`,
      respuesta: `{
  "id": 5,
  "tipo": "imagen",
  "es_venta": true,
  "descripcion": "Caja de frutillas frescas",
  "url_imagen": "https://..."
}`,
    },
  ];

  const getMethodClass = (method) => {
    if (method === "GET") return "method get";
    if (method === "POST") return "method post";
    if (method === "PATCH") return "method patch";
    if (method === "DELETE") return "method delete";
    return "method";
  };

  return (
    <main className="docs-page">
      <section className="hero">
        <p className="badge">OnlyFrutas Backend</p>
        <h1>Documentación de Endpoints</h1>
        <p>
          Esta página resume los endpoints principales de la API para la Entrega
          1. Sirve como contrato básico entre frontend y backend.
        </p>
      </section>

      <section className="info-grid">
        <article>
          <h2>Base URL</h2>
          <code>https://onlyfrutas-backend.onrender.com</code>
        </article>

        <article>
          <h2>Autenticación</h2>
          <p>
            Las rutas protegidas deben enviar el token JWT en el header:
          </p>
          <code>Authorization: Bearer &lt;token&gt;</code>
        </article>
      </section>

      <section className="endpoints">
        <h2>Endpoints principales</h2>

        {endpoints.map((endpoint, index) => (
          <article className="endpoint-card" key={index}>
            <div className="endpoint-header">
              <span className={getMethodClass(endpoint.metodo)}>
                {endpoint.metodo}
              </span>
              <code>{endpoint.ruta}</code>
            </div>

            <p className="description">{endpoint.descripcion}</p>

            <div className="meta">
              <span>Módulo: {endpoint.modulo}</span>
              <span>Requiere JWT: {endpoint.auth}</span>
            </div>

            <div className="code-grid">
              <div>
                <h3>Body esperado</h3>
                <pre>{endpoint.body}</pre>
              </div>

              <div>
                <h3>Respuesta esperada</h3>
                <pre>{endpoint.respuesta}</pre>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
