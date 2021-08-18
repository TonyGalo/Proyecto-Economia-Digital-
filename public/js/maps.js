var map;
var markers;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 14.10596, lng: -87.20476 },
        zoom: 13
    });
}

window.onload = async() => {
    var querySnapshot = await listarVeterinarias();
    querySnapshot.forEach(doc => {

        var vet = doc.data();
        if (vet.ubicacion != undefined || vet.Ubicacion != undefined){
            var ubi = vet.ubicacion != undefined ? vet.ubicacion: vet.Ubicacion;
            var myLatLng = { lat: ubi._lat, lng: ubi._long };
            new google.maps.Marker({
                position: myLatLng,
                map,
                title: vet.nombre,
            });
        }
        

    });
}
