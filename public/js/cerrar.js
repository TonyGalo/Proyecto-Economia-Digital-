var btnCerrarSesion = document.getElementById('logOut');

btnCerrarSesion.addEventListener('click', async(e) => {

    const resultado = await cerrarSesion()
        .then(
            async userCredential => {
                window.location.replace("../public/index.html");
            }
        )
        .catch(
            e => {}
        );
});