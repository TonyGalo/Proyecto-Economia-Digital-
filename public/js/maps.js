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
        var myLatLng = { lat: vet.ubicacion._lat, lng: vet.ubicacion._long };
        new google.maps.Marker({
            position: myLatLng,
            map,
            title: vet.nombre,
        });

    });
}