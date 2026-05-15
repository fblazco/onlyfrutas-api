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
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const getContentsError = [
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

  const getContentByIdError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 404,
      code: "CONTENT_NOT_FOUND",
      message: "La publicación solicitada no existe.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const postContentsError = [
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Faltan campos obligatorios para crear la publicación.",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "El tipo de contenido no es valido",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "URL de imagen no valido",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "URL del video no valido",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Post vacio",
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
      module: "Auth",
      method: "POST",
      path: "/api/auth/register",
      description: "Registra un nuevo usuario en OnlyFrutas.",
      auth: "No",
      body: `{
  "username": "felipe",
  "visible_name": "Felipe",
  "email": "felipe@mail.com",
  "password": "123456"
}`,
      response: `{
  "success": true,
  "token": "jwt...",
  "user": {
    "id": 1,
    "username": "felipe",
    "visible_name": "Felipe",
    "rol": "usuario"
  }
}`,
      errors: postAuthRegisterError,
    },
    {
      module: "Auth",
      method: "POST",
      path: "/api/auth/login",
      description: "Inicia sesión y retorna un token JWT.",
      auth: "No",
      body: `{
  "email": "felipe@mail.com",
  "password": "123456"
}`,
      response: `{
  "success": true,
  "token": "jwt...",
  "user": {
    "id": 1,
    "username": "felipe",
    "rol": "usuario"
  }
}`,
      errors: postAuthLoginError,
    },
    {
      module: "Auth",
      method: "GET",
      path: "/api/auth/me",
      description: "Obtiene la información del usuario logueado.",
      auth: "Sí",
      body: "No requiere body.",
      response: `{
  "success": true,
  "user": {
    "id": 1,
    "username": "felipe",
    "visible_name": "Felipe",
    "email": "felipe@mail.com",
    "rol": "usuario"
  }
}`,
      errors: getAuthMeError,
    },
    {
      module: "Content",
      method: "GET",
      path: "/api/publicaciones",
      description: "Obtiene las publicaciones para poblar la Main Page.",
      auth: "No",
      body: "No requiere body.",
      response: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "image",
      "is_sale": true,
      "reaction_count": 12,
      "image_url": "https://...",
      "video_url": null,
      "author": {
        "id": 3,
        "username": "frutas_pedro",
        "visible_name": "Frutas Pedro",
        "image": "https://..."
      },
      "createdAt": "2026-05-15T12:00:00.000Z",
      "text": "Caja de frutillas frescas"
    },
    {
      "id": 2,
      "type": "post",
      "is_sale": false,
      "reaction_count": 5,
      "image_url": null,
      "video_url": null,
      "author": {
        "id": 4,
        "username": "la_feria",
        "visible_name": "La Feria",
        "image": null
      },
      "createdAt": "2026-05-15T13:30:00.000Z",
      "text": "Hoy llegaron nuevas frutas de temporada."
    },
    {
      "id": 3,
      "type": "reel",
      "is_sale": false,
      "reaction_count": 8,
      "image_url": null,
      "video_url": "https://...",
      "author": {
        "id": 5,
        "username": "frutas_sur",
        "visible_name": "Frutas del Sur",
        "image": null
      },
      "createdAt": "2026-05-15T14:00:00.000Z",
      "text": "Preparando pedidos de la mañana."
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 20
}`,
      errors: getContentsError,
    },
    {
      module: "Content",
      method: "GET",
      path: "/api/publicaciones/:id",
      description: "Obtiene el detalle de una publicación específica.",
      auth: "No",
      body: "No requiere body.",
      response: `{
  "success": true,
  "content": {
    "id": 1,
    "type": "image",
    "is_sale": true,
    "reaction_count": 12,
    "image_url": "https://...",
    "video_url": null,
    "author": {
      "id": 3,
      "username": "frutas_pedro",
      "visible_name": "Frutas Pedro",
      "image": "https://..."
    },
    "createdAt": "2026-05-15T12:00:00.000Z",
    "text": "Caja de frutillas frescas"
  }
}`,
      errors: getContentByIdError,
    },
    {
      module: "Content",
      method: "POST",
      path: "/api/publicaciones",
      description: "Crea una nueva publicación de tipo image.",
      auth: "Sí",
      body: `{
  "type": "image",
  "is_sale": true,
  "text": "Caja de frutillas frescas",
  "image_url": "https://..."
}`,
      response: `{
  "success": true,
  "content": {
    "id": 5,
    "type": "image",
    "is_sale": true,
    "reaction_count": 0,
    "image_url": "https://...",
    "video_url": null,
    "text": "Caja de frutillas frescas",
    "createdAt": "2026-05-15T14:00:00.000Z"
  }
}`,
      errors: postContentsError,
    },
    {
      module: "Content",
      method: "POST",
      path: "/api/publicaciones",
      description: "Crea una nueva publicación de tipo post.",
      auth: "Sí",
      body: `{
  "type": "post",
  "is_sale": false,
  "text": "Hoy llegaron nuevas frutas de temporada."
}`,
      response: `{
  "success": true,
  "content": {
    "id": 6,
    "type": "post",
    "is_sale": false,
    "reaction_count": 0,
    "image_url": null,
    "video_url": null,
    "text": "Hoy llegaron nuevas frutas de temporada.",
    "createdAt": "2026-05-15T14:10:00.000Z"
  }
}`,
      errors: postContentsError,
    },
    {
      module: "Content",
      method: "POST",
      path: "/api/publicaciones",
      description: "Crea una nueva publicación de tipo reel.",
      auth: "Sí",
      body: `{
  "type": "reel",
  "is_sale": false,
  "text": "Mira cómo preparamos los pedidos de hoy.",
  "video_url": "https://..."
}`,
      response: `{
  "success": true,
  "content": {
    "id": 7,
    "type": "reel",
    "is_sale": false,
    "reaction_count": 0,
    "image_url": null,
    "video_url": "https://...",
    "text": "Mira cómo preparamos los pedidos de hoy.",
    "createdAt": "2026-05-15T14:20:00.000Z"
  }
}`,
      errors: postContentsError,
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
              <span className={getMethodClass(endpoint.method)}>
                {endpoint.method}
              </span>
              <code>{endpoint.path}</code>
            </div>

            <p className="description">{endpoint.description}</p>

            <div className="meta">
              <span>Módulo: {endpoint.module}</span>
              <span>Requiere JWT: {endpoint.auth}</span>
            </div>

            <div className="code-grid">
              <div>
                <h3>Body esperado</h3>
                <pre>{endpoint.body}</pre>
              </div>

              <div>
                <h3>Respuesta esperada</h3>
                <pre>{endpoint.response}</pre>
              </div>
            </div>

            <div className="errors-section">
              <h3>Errores posibles</h3>

              <div className="errors-grid">
                {endpoint.errors.map((error, errorIndex) => (
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