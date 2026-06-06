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
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Los datos enviados no son válidos o faltan campos obligatorios.",
    },
    {
      status: 400,
      code: "PFP_URL_TOO_LONG",
      message: "La URL de la foto de perfil es demasiado larga",
    },
    {
      status: 400,
      code: "PFP_URL_NOT_VALID",
      message: "El formato de la URL no es valido",
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
      status: 403,
      code: "USER_NOT_ACTIVE",
      message: "La cuenta no esta activa",
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

  const getUserByIdError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
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

  const patchUserMeError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Los datos enviados no son válidos o faltan campos obligatorios.",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "El formato de la región es incorrecto.",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "El formato de la descripción es incorrecto.",
    },
    {
      status: 400,
      code: "DESCRIPTION_TOO_LONG",
      message: "La descripción supera el límite máximo de caracteres.",
    },
    {
      status: 400,
      code: "PFP_URL_NOT_VALID",
      message: "El formato de la URL no es valido",
    },
    {
      status: 400,
      code: "PFP_URL_TOO_LONG",
      message: "La URL de la foto de perfil es demasiado larga",
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

  const deleteUserMeError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
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

  const getUserContentsError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
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
      code: "CONTENT_IMAGE_TOO_LONG",
      message: "URL del imagen muy largo",
    },
    {
      status: 400,
      code: "CONTENT_VIDEO_TOO_LONG",
      message: "URL del video muy largo",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Post vacio",
    },
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
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const patchContentError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
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
      status: 400,
      code: "VALIDATION_ERROR",
      message: "El texto de la publicación supera el límite permitido.",
    },
    {
      status: 400,
      code: "CONTENT_IMAGE_TOO_LONG",
      message: "URL del imagen muy largo",
    },
    {
      status: 400,
      code: "CONTENT_VIDEO_TOO_LONG",
      message: "URL del video muy largo",
    },
    {
      status: 403,
      code: "FORBIDDEN",
      message: "No tienes permisos para realizar esta acción.",
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

  const deleteContentError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 403,
      code: "FORBIDDEN",
      message: "No tienes permisos para realizar esta acción.",
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

  const patchSaleStatusError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 400,
      code: "NOT_A_SALE",
      message: "El contenido al que intentas acceder no está marcado como venta.",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "El tipo de contenido no es valido",
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

  const getContentCommentsError = [
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

  const getCommentByIdError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 404,
      code: "COMMENT_NOT_FOUND",
      message: "El comentario solicitado no existe.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const postCommentError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Los datos enviados no son válidos o faltan campos obligatorios.",
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

  const patchCommentError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Los datos enviados no son válidos o faltan campos obligatorios.",
    },
    {
      status: 400,
      code: "VALIDATION_ERROR",
      message: "El texto del comentario es demasiado largo.",
    },
    {
      status: 403,
      code: "FORBIDDEN",
      message: "No tienes permisos para realizar esta acción.",
    },
    {
      status: 404,
      code: "COMMENT_NOT_FOUND",
      message: "El comentario solicitado no existe.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const deleteCommentError = [
    {
      status: 400,
      code: "INVALID_ID",
      message: "El id de la publicación no es válido.",
    },
    {
      status: 403,
      code: "FORBIDDEN",
      message: "No tienes permisos para realizar esta acción.",
    },
    {
      status: 404,
      code: "COMMENT_NOT_FOUND",
      message: "El comentario solicitado no existe.",
    },
    {
      status: 500,
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocurrió un error inesperado en el servidor.",
    },
  ];

  const userAuthEndpoints = [
    {
      module: "User/Auth",
      method: "POST",
      path: "/api/auth/login",
      description: "Iniciar sesión y obtener token JWT.",
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
    "visible_name": "Felipe",
    "email": "felipe@mail.com",
    "pfp": "https://...",
    "region": "Metropolitana",
    "rol": "usuario"
  }
}`,
      errors: postAuthLoginError,
    },
    {
      module: "User/Auth",
      method: "POST",
      path: "/api/auth/register",
      description: "Crear usuario.",
      auth: "No",
      body: `{
  "username": "felipe",
  "visible_name": "Felipe",
  "email": "felipe@mail.com",
  "password": "123456",
  "region": "Metropolitana",
  "pfp": "https://example.com/profile.jpg"
}`,
      response: `{
  "success": true,
  "token": "jwt...",
  "user": {
    "id": 1,
    "username": "felipe",
    "visible_name": "Felipe",
    "email": "felipe@mail.com",
    "pfp": "https://...",
    "region": "Metropolitana",
    "rol": "usuario"
  }
}`,
      errors: postAuthRegisterError,
    },
    {
      module: "User/Auth",
      method: "GET",
      path: "/api/auth/me",
      description: "Obtener la información del usuario logueado.",
      auth: "Sí",
      body: "No requiere body.",
      response: `{
  "success": true,
  "user": {
    "id": 1,
    "username": "felipe",
    "visible_name": "Felipe",
    "email": "felipe@mail.com",
    "pfp": "https://...",
    "region": "Metropolitana",
    "rol": "usuario"
  }
}`,
      errors: getAuthMeError,
    },
    {
      module: "User/Auth",
      method: "GET",
      path: "/api/users/:id",
      description: "Obtener perfil público de un usuario.",
      auth: "No",
      body: "No requiere body.",
      response: `{
  "success": true,
  "user": {
    "id": 1,
    "username": "felipe",
    "visible_name": "Felipe",
    "pfp": "https://...",
    "region": "Metropolitana",
    "description": "Vendedor de frutas de temporada",
    "average_rating": 4.8
  }
}`,
      errors: getUserByIdError,
    },
    {
      module: "User/Auth",
      method: "PATCH",
      path: "/api/users/me",
      description: "Editar información del usuario logueado.",
      auth: "Sí",
      body: `{
  "visible_name": "Felipe Blasquez",
  "region": "Metropolitana",
  "description": "Vendo frutas frescas de temporada",
  "pfp": "https://example.com/new-profile.jpg"
}`,
      response: `{
  "success": true,
  "user": {
    "id": 1,
    "username": "felipe",
    "visible_name": "Felipe Blasquez",
    "email": "felipe@mail.com",
    "pfp": "https://example.com/new-profile.jpg",
    "region": "Metropolitana",
    "description": "Vendo frutas frescas de temporada",
    "rol": "usuario"
  }
}`,
      errors: patchUserMeError,
    },
    {
      module: "User/Auth",
      method: "DELETE",
      path: "/api/users/me",
      description: "Eliminar o desactivar la cuenta del usuario logueado.",
      auth: "Sí",
      body: "No requiere body.",
      response: `{
  "success": true,
  "message": "Cuenta desactivada correctamente."
}`,
      errors: deleteUserMeError,
    },
  ];

  const contentEndpoints = [
    {
      module: "Content",
      method: "GET",
      path: "/api/contents",
      description: "Obtener todas las publicaciones para el feed/main page.",
      auth: "No",
      body: "No requiere body.",
      response: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "image",
      "is_sale": true,
      "status": "Available",
      "reaction_count": 12,
      "image_url": "https://...",
      "video_url": null,
      "author": {
        "id": 3,
        "username": "frutas_pedro",
        "visible_name": "Frutas Pedro",
        "pfp": "https://..."
      },
      "created_at": "2026-05-15T12:00:00.000Z",
      "text": "Caja de frutillas frescas"
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
      path: "/api/contents/:id",
      description: "Obtener una publicacion especifica por id.",
      auth: "No",
      body: "No requiere body.",
      response: `{
  "success": true,
  "content": {
    "id": 1,
    "type": "image",
    "is_sale": true,
    "status": "Available",
    "reaction_count": 12,
    "image_url": "https://...",
    "video_url": null,
    "author": {
      "id": 3,
      "username": "frutas_pedro",
      "visible_name": "Frutas Pedro",
      "pfp": "https://..."
    },
    "created_at": "2026-05-15T12:00:00.000Z",
    "text": "Caja de frutillas frescas"
  }
}`,
      errors: getContentByIdError,
    },
    {
      module: "Content",
      method: "GET",
      path: "/api/users/:userId/contents",
      description: "Obtener las publicaciones de un usuario específico.",
      auth: "No",
      body: "No requiere body.",
      response: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "post",
      "is_sale": false,
      "status": "Available",
      "reaction_count": 5,
      "image_url": null,
      "video_url": null,
      "text": "Hoy llegaron nuevas frutas de temporada.",
      "created_at": "2026-05-15T13:30:00.000Z"
    }
  ]
}`,
      errors: getUserContentsError,
    },
    {
      module: "Content",
      method: "POST",
      path: "/api/contents",
      description: "Crear una nueva publicación.",
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
    "status": "Available",
    "reaction_count": 0,
    "image_url": "https://...",
    "video_url": null,
    "text": "Caja de frutillas frescas",
    "created_at": "2026-05-15T14:00:00.000Z"
  }
}`,
      errors: postContentsError,
    },
    {
      module: "Content",
      method: "PATCH",
      path: "/api/contents/:id",
      description: "Editar una publicación propia.",
      auth: "Sí",
      body: `{
  "text": "Caja de frutillas frescas actualizada",
  "image_url": "https://example.com/frutillas.jpg",
  "is_sale": true
}`,
      response: `{
  "success": true,
  "content": {
    "id": 5,
    "type": "image",
    "is_sale": true,
    "status": "Available",
    "reaction_count": 0,
    "image_url": "https://example.com/frutillas.jpg",
    "video_url": null,
    "text": "Caja de frutillas frescas actualizada"
  }
}`,
      errors: patchContentError,
    },
    {
      module: "Content",
      method: "DELETE",
      path: "/api/contents/:id",
      description: "Eliminar una publicación propia.",
      auth: "Sí",
      body: "No requiere body.",
      response: `{
  "success": true,
  "message": "Publicación eliminada correctamente."
}`,
      errors: deleteContentError,
    },
    {
      module: "Content",
      method: "PATCH",
      path: "/api/contents/:id/sale-status",
      description: "Cambiar el estado de venta de una publicación.",
      auth: "Sí",
      body: `{
  "status": "Paused"
}`,
      response: `{
  "success": true,
  "content": {
    "id": 5,
    "is_sale": true,
    "status": "Paused"
  }
}`,
      errors: patchSaleStatusError,
    },
  ];

  const commentEndpoints = [
    {
      module: "Comment",
      method: "GET",
      path: "/api/contents/:contentId/comments",
      description: "Obtener los Comments de una publicación específica.",
      auth: "No",
      body: "No requiere body.",
      response: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "content": "Se ven buenísimas las frutillas",
      "likes": 3,
      "media": null,
      "author": {
        "id": 2,
        "username": "comprador_1",
        "visible_name": "Comprador 1",
        "pfp": "https://..."
      },
      "created_at": "2026-05-15T15:00:00.000Z"
    }
  ]
}`,
      errors: getContentCommentsError,
    },
    {
      module: "Comment",
      method: "GET",
      path: "/api/comments/:id",
      description: "Obtener un Comment específico por id.",
      auth: "No",
      body: "No requiere body.",
      response: `{
  "success": true,
  "comment": {
    "id": 1,
    "content": "Se ven buenísimas las frutillas",
    "likes": 3,
    "media": null,
    "author": {
      "id": 2,
      "username": "comprador_1",
      "visible_name": "Comprador 1",
      "pfp": "https://..."
    },
    "created_at": "2026-05-15T15:00:00.000Z"
  }
}`,
      errors: getCommentByIdError,
    },
    {
      module: "Comment",
      method: "POST",
      path: "/api/contents/:contentId/comments",
      description: "Crear un Comment en una publicación.",
      auth: "Sí",
      body: `{
  "content": "Hola, ¿siguen disponibles?",
  "media": null
}`,
      response: `{
  "success": true,
  "comment": {
    "id": 2,
    "content": "Hola, ¿siguen disponibles?",
    "likes": 0,
    "media": null,
    "content_id": 5,
    "created_at": "2026-05-15T15:10:00.000Z"
  }
}`,
      errors: postCommentError,
    },
    {
      module: "Comment",
      method: "PATCH",
      path: "/api/comments/:id",
      description: "Editar un Comment propio.",
      auth: "Sí",
      body: `{
  "content": "Hola, ¿siguen disponibles las frutillas?"
}`,
      response: `{
  "success": true,
  "comment": {
    "id": 2,
    "content": "Hola, ¿siguen disponibles las frutillas?",
    "likes": 0,
    "media": null
  }
}`,
      errors: patchCommentError,
    },
    {
      module: "Comment",
      method: "DELETE",
      path: "/api/comments/:id",
      description: "Eliminar un Comment propio.",
      auth: "Sí",
      body: "No requiere body.",
      response: `{
  "success": true,
  "message": "Comment eliminado correctamente."
}`,
      errors: deleteCommentError,
    },
  ];

  const getMethodClass = (method) => {
    if (method === "GET") return "method get";
    if (method === "POST") return "method post";
    if (method === "PATCH") return "method patch";
    if (method === "DELETE") return "method delete";
    return "method";
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderEndpointCard = (endpoint, index) => (
    <article className="endpoint-card" key={`${endpoint.module}-${index}`}>
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

        {endpoint.errors.length > 0 ? (
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
        ) : (
          <p className="description">
            Errores específicos pendientes de documentar.
          </p>
        )}
      </div>
    </article>
  );

  const renderEndpointSection = (id, title, description, endpoints) => (
    <section className="endpoints" id={id}>
      <h2>{title}</h2>
      <p className="description">{description}</p>

      {endpoints.map((endpoint, index) => renderEndpointCard(endpoint, index))}
    </section>
  );

  return (
    <main className="docs-page">
      <nav className="docs-navbar">
        <button onClick={() => scrollToSection("inicio")}>Inicio</button>
        <button onClick={() => scrollToSection("auth")}>Auth</button>
        <button onClick={() => scrollToSection("errores")}>Errores</button>
        <button onClick={() => scrollToSection("user-auth-endpoints")}>
          User/Auth
        </button>
        <button onClick={() => scrollToSection("content-endpoints")}>
          Content
        </button>
        <button onClick={() => scrollToSection("comment-endpoints")}>
          Comment
        </button>
        <button onClick={() => scrollToSection("setup-db")}>Setup DB</button>
      </nav>

      <section className="hero" id="inicio">
        <p className="badge">OnlyFrutas Backend</p>
        <h1>Documentación de Endpoints</h1>
        <p>
          Esta página resume los endpoints principales de la API para la Entrega
          2. Sirve como contrato básico entre frontend y backend.
        </p>
      </section>

      <section className="info-grid" id="auth">
        <article>
          <h2>Base URL</h2>
          <code>https://onlyfrutas-backend-26-1.onrender.com/</code>
        </article>

        <article>
          <h2>Autenticación</h2>
          <p>Las rutas protegidas deben enviar el token JWT en el header:</p>
          <code>Authorization: Bearer &lt;token&gt;</code>
        </article>
      </section>

      <section className="error-format" id="errores">
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

      {renderEndpointSection(
        "user-auth-endpoints",
        "User/Auth",
        "Endpoints relacionados con autenticación, sesión y perfil de usuario.",
        userAuthEndpoints
      )}

      {renderEndpointSection(
        "content-endpoints",
        "Content",
        "Endpoints relacionados con publicaciones, feed, edición, eliminación y ciclo de vida de ventas.",
        contentEndpoints
      )}

      {renderEndpointSection(
        "comment-endpoints",
        "Comment",
        "Endpoints relacionados con Comments sobre publicaciones.",
        commentEndpoints
      )}

      <section className="db-setup" id="setup-db">
        <h2>Setup local de PostgreSQL</h2>
        <p>
          Esta sección resume cómo levantar la base de datos localmente para
          correr el backend de OnlyFrutas.
        </p>

        <div className="setup-grid">
          <article>
            <h3>1. Crear base de datos</h3>
            <pre>{`psql -U postgres

CREATE DATABASE onlyfrutas;`}</pre>
          </article>

          <article>
            <h3>2. Crear usuario</h3>
            <pre>{`CREATE USER onlyfrutas_user WITH PASSWORD 'TU_PASSWORD_AQUI';

GRANT ALL PRIVILEGES ON DATABASE onlyfrutas TO onlyfrutas_user;`}</pre>
          </article>

          <article>
            <h3>3. Dar permisos al schema</h3>
            <pre>{`\\c onlyfrutas

GRANT ALL ON SCHEMA public TO onlyfrutas_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO onlyfrutas_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO onlyfrutas_user;`}</pre>
          </article>

          <article>
            <h3>4. Variables de entorno</h3>
            <pre>{`DB_NAME=onlyfrutas
DB_USERNAME=onlyfrutas_user
DB_PASSWORD=TU_PASSWORD_AQUI
DB_PORT=5432
DB_HOST=localhost

JWT_SECRET=onlyfrutas_secret_key
JWT_EXPIRES_IN=1d`}</pre>
          </article>

          <article>
            <h3>5. Levantar backend</h3>
            <pre>{`npm install
npm run dev`}</pre>
          </article>

          <article>
            <h3>6. Probar health check</h3>
            <pre>{`GET http://localhost:3000/api/health`}</pre>
          </article>
        </div>

        <p className="warning-text">
          Importante: el archivo <code>.env</code> no debe subirse al
          repositorio. Debe estar incluido en <code>.gitignore</code>.
        </p>
      </section>
    </main>
  );
}

export default App;