function App() {
  const standardError = `{
  "success": false,
  "error": {
    "status": 400,
    "code": "VALIDATION_ERROR",
    "message": "Faltan campos obligatorios."
  }
}`;

  const postAuthRegisterError = [
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Faltan campos obligatorios.",
    },
    {
      status: 409,
      code: "EMAIL_ALREADY_EXISTS",
      message: "Ya existe una cuenta registrada con este correo.",
    },
    {
      status: 409,
      code: "USERNAME_ALREADY_EXISTS",
      message: "El nombre de usuario ya está en uso.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const postAuthLoginError = [
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Debes ingresar correo y contraseña.",
    },
    {
      status: 401,
      code: "INVALID_CREDENTIALS",
      message: "Correo o contraseña incorrectos.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const getAuthMeError = [
    {
      status: 401,
      code: "MISSING_TOKEN",
      message: "Debes iniciar sesión para acceder a este recurso.",
    },
    {
      status: 401,
      code: "INVALID_TOKEN",
      message: "La sesión no es válida o expiró.",
    },
    {
      status: 404,
      code: "USER_NOT_FOUND",
      message: "El usuario no existe.",
    },
  ];

  const getPublicacionesError = [
    {
      status: 400,
      code: "INVALID_QUERY_PARAMS",
      message: "Los filtros enviados no son válidos.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const getPublicacionByIdError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 404,
      code: "PUBLICACION_NOT_FOUND",
      message: "La publicación solicitada no existe.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const postPublicacionesError = [
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Faltan campos obligatorios para crear la publicación.",
    },
    {
      status: 401,
      code: "MISSING_TOKEN",
      message: "Debes iniciar sesión para crear una publicación.",
    },
    {
      status: 401,
      code: "INVALID_TOKEN",
      message: "La sesión no es válida o expiró.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

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
  "success": true,
  "token": "jwt...",
  "user": {
    "id": 1,
    "username": "felipe",
    "nombre_visible": "Felipe",
    "rol": "usuario"
  }
}`,
      errores: postAuthRegisterError,
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
  "success": true,
  "token": "jwt...",
  "user": {
    "id": 1,
    "username": "felipe",
    "rol": "usuario"
  }
}`,
      errores: postAuthLoginError,
    },
    {
      modulo: "Auth",
      metodo: "GET",
      ruta: "/api/auth/me",
      descripcion: "Obtiene la información del usuario logueado.",
      auth: "Sí",
      body: "No requiere body.",
      respuesta: `{
  "success": true,
  "user": {
    "id": 1,
    "username": "felipe",
    "nombre_visible": "Felipe",
    "correo": "felipe@mail.com",
    "rol": "usuario"
  }
}`,
      errores: getAuthMeError,
    },
    {
      modulo: "Publicaciones",
      metodo: "GET",
      ruta: "/api/publicaciones",
      descripcion: "Obtiene las publicaciones para poblar la Main Page.",
      auth: "No",
      body: "No requiere body.",
      respuesta: `{
  "success": true,
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
      errores: getPublicacionesError,
    },
    {
      modulo: "Publicaciones",
      metodo: "GET",
      ruta: "/api/publicaciones/:id",
      descripcion: "Obtiene el detalle de una publicación específica.",
      auth: "No",
      body: "No requiere body.",
      respuesta: `{
  "success": true,
  "publicacion": {
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
  }
}`,
      errores: getPublicacionByIdError,
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
  "success": true,
  "publicacion": {
    "id": 5,
    "tipo": "imagen",
    "es_venta": true,
    "descripcion": "Caja de frutillas frescas",
    "url_imagen": "https://..."
  }
}`,
      errores: postPublicacionesError,
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
          <p>Las rutas protegidas deben enviar el token JWT en el header:</p>
          <code>Authorization: Bearer &lt;token&gt;</code>
        </article>
      </section>

      <section className="error-format">
        <h2>Formato estándar de errores</h2>
        <p>
          Todos los errores de la API seguirán esta estructura. Esto permite que
          el frontend maneje los errores de manera consistente.
        </p>

        <ul>
          <li>
            <strong>status:</strong> código HTTP de la respuesta.
          </li>
          <li>
            <strong>code:</strong> identificador interno del error.
          </li>
          <li>
            <strong>message:</strong> mensaje legible para mostrar o manejar en
            frontend.
          </li>
        </ul>

        <pre>{standardError}</pre>
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

            <div className="errors-section">
              <h3>Errores posibles</h3>

              <div className="errors-grid">
                {endpoint.errores.map((error, errorIndex) => (
                  <div className="error-card" key={errorIndex}>
                    <div className="error-header">
                      <span className="error-status">{error.status}</span>
                      <span className="error-code">{error.code}</span>
                    </div>
                    <p>{error.message}</p>

                    <pre>{`{
  "success": false,
  "error": {
    "status": ${error.status},
    "code": "${error.code}",
    "message": "${error.message}"
  }
}`}</pre>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;