const mainUrl = "http://localhost:1337/";

const headersConfig = (token) => {
    let config = {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
    }
    return config
}

const account = {
    signIn: mainUrl + "api/v1/login",
    signOut: mainUrl + "api/v1/logout",
    forgot: mainUrl + "api/v1/forgot-password",
    change: mainUrl + "api/v1/change-password"
}

const sesiones = {

}

const usuarios = {

}

const Api = {
    ...account,
    headersConfig: headersConfig,
    sesiones: sesiones,
    usuarios: usuarios,
}
// 'post /api/v1/nuevo-usuario'         : 'UsuariosController.nuevoUsuario',
// 'post /api/v1/eliminar-usuario'      : 'UsuariosController.eliminarUsuario',
// 'post /api/v1/editar-usuario'        : 'UsuariosController.editarUsuario',
// 'get /api/v1/ver-usuario'            : 'UsuariosController.verUsuario',
// 'get /api/v1/ver-usuarios'           : 'UsuariosController.verUsuarios',
//  //MANEJAR SESIONES
// 'post /api/v1/login'                 : 'SesionesController.login',
// 'post /api/v1/logout'                : 'SesionesController.logout',
// 'post /api/v1/forgot-password'       : 'SesionesController.forgotPassword',
// 'post /api/v1/change-password'       : 'SesionesController.changePassword',
// //FUNCIONES DE USUARIO
// 'post /api/v1/actualizar-mi-foto'           : 'UsuarioController.updateProfilePic',
// 'post /api/v1/add-notification'           : 'UsuarioController.notificationTest',
// //test first conection
// 'POST  /api/v1/create-input': { action: 'create-input' },
// 'GET   /api/v1/read-inputs': { action: 'read-inputs' }
export default Api;