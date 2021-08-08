const fregistro = document.getElementById('form-registro');

var btnRegistroGoogle = document.getElementById('registroGoogle');

fregistro.addEventListener('submit', async(e) => {
    e.preventDefault();
    correo = fregistro.elements[0].value;
    contrasenia = fregistro.elements[1].value;

    const resultado = await registroCorreo(correo, contrasenia).then(
        async userCredential => {
            fregistro.reset();

            usuario = prompt("Ingresa un nombre de usuario");
            const nuevoUsuario = await guardarUsuario(usuario, userCredential.user.uid)
                .then(r => {})
                .catch(e => {})
        }
    ).catch(
        e => {
            alert(e.message);
        }
    );
});

btnRegistroGoogle.addEventListener('click', async(e) => {

    const resultado = await registroGoogle()
        .then(
            async userCredential => {
                usuario = prompt("Ingresa un nombre de usuario");
                const nuevoUsuario = await guardarUsuario(usuario, userCredential.user.uid)
                    .then(r => {})
                    .catch(e => {})
            }
        )
        .catch(
            e => {}
        );
});