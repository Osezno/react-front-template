const pageInfo = {
  logo: "img/logo.png",
  cover: "img/cover.jpg",
  icon: "img/icon.png",
  nombre: "<project>",
  welcomeMessage: "<welcome-message>",
  slogan: "Lorem Ipsum dolor amet",
  footerMessage: "© 2020 appName.",
}

const errors = {
  default: "Faltan datos",
  mail: "El email no es valido",
  mailUnavalible: "El email ya existe en nuestra base de datos",
  password: "El Password es incorrecto",
  passwordReq: "El Password no es seguro",
  name: "Nombre incorrecto",
  //for login password?
  noUser: "El Usuario no existe en el sistema",
  session: "Sesión invalida",
  denied: "Permisos insuficientes",
  estatus: "Tu cuenta esta desabilitada",
  recovery: "Tu token expiro o es incorrecto",
  serverError: "Estamos experimentando problemas, nuestros tecnicos estan trabajando para resolverlos."
}

const success = {
  userUpdated: "¡Usuario actualizado exitosamente!",
  login: "Sesión exitosa...",
  verified: "Sesión verificada...",
  logout: "Sesión cerrada.",
  recovery: "Contraseña actualizada.",
  emailSend: "¡Correo enviado! revisa tu bandeja de entrada."
}

const Catalogs = {
  pageInfo: pageInfo,
  errors:errors,
  success: success
}

export default Catalogs;