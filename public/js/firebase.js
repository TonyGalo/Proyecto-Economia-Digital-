const auth = firebase.auth();
var google = new firebase.auth.GoogleAuthProvider();
var facebook = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();

// Registro
// registro con correo 
const registroCorreo = (correo, contrasenia) =>
    auth.createUserWithEmailAndPassword(correo, contrasenia);


// registro con google
const registroGoogle = () => auth.signInWithPopup(google);

// registro con facebook
const registroFacebook = () => auth.signInWithPopup(facebook);

// Cerrar Sesion 
const cerrarSesion = () => auth.signOut();
// Fin Registro

// Inicio de Sesion 
const iniciarSesion = (correo, contrasenia) => auth.signInWithEmailAndPassword(correo, contrasenia);

// Fin Inicio de Sesion 

// Usuarios
// Agregar usuario 
const guardarUsuario = (usuario, uid) =>
    db.collection('usuarios').doc().set({
        uid: uid,
        usuario: usuario
    });

// Leer usuarios
const listarUsuarios = () => db.collection('usuarios').get();

// Leer usuarios tiempo real
const listarUsuariosRT = (callback) => db.collection('usuarios').onSnapshot(callback);

// Leer usuario
const listarUsuario = (id) => db.collection('usuarios').doc(id).get();

// Editar Usuario 
const editarUsuario = (usuario, id) => db.collection('usuarios').doc(id).update({
    usuario: usuario
});

// Eliminar usuario 
// const eliminarUsuario = () => {}

// Fin Usuarios

// Veterinarias
// Agregar Veterinaria 
const guardarVeterinaria = (usuario, uid) =>
    db.collection('veterinarias').doc().set({
        uid: uid,
        usuario: usuario
    });

// Leer veterinarias
const listarVeterinarias = () => db.collection('veterinarias').get();

// Leer veterinarias tiempo real
const listarVeterinariasRT = (callback) => db.collection('veterinarias').onSnapshot(callback);

// Leer veterinaria
const listarVeterinaria = (id) => db.collection('veterinarias').doc(id).get();

// Eliminar veterinaria 
const eliminarVeterinaria = (id) => db.collection('veterinarias').doc(id).delete();
// Fin veterinarias

// window.addEventListener('DOMContentLoaded', async(e) => {
//     const resultado = await listarUsuarios();

//     resultado.forEach(doc => {
//         console.log(doc.data());
//     })
// })