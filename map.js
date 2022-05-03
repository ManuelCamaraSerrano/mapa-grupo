$(document).ready(function(){

    var map = L.map('map').setView([38, -8], 7); // Creamos el mapa

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); // Añadimos el layer

    var markers = L.markerClusterGroup();

      var customIcon = L.AwesomeMarkers.icon({  // Creamos el icono del marcador
        icon: 'paw',
        prefix:'fa',
        markerColor: 'blue',
        iconColor: 'white'
      });


    for (let i=0; i<1000; i++) {  // Bucle para añadir los marcadores
    const marker = L.marker([
        getRandom(37, 39), 
        getRandom(-9.5, -6.5)
    ],{icon: customIcon})

    marker.bindPopup(`<div class="masInfo">
    <div class="row col-10 offset-1">
        <div class="d-flex justify-content-center">
            <img src="perro.jpg" class="col-10" alt="">
        </div>
        <div class="col-6">
            <label for="Nombre">Nombre:</label>
            <p>Yogui</p>
        </div>
        <div class="col-6">
            <label for="Tipo">Tipo:</label>
            <p>Perro</p>
        </div>

        <div class="col-6">
            <label for="Raza">Raza:</label>
            <p>Labrador</p>
        </div>

        <div class="col-6">
            <label for="Color">Color:</label>
            <p>Blanco</p>
        </div>

        <div class="col-10">
            <label for="Color">Descripción:</label>
            <p class="descripcion">jasbnfuuuuuuuuuuuuuuuuuuuuuu uuuuuuuu uuuuuuuuuu uuuuuuuuuuu uuuuuuuu uuuuuuuus fdsfffffffff fffffffffffff fffffffuuuuuuuuu uuuuu</p>
        </div>
        <div class="col-8">
            <h4>Contacto:</h4>
        </div>

        <div class="col-6">
            <label for="Color">Email:</label>
            <p>bdsfihb@gmail.com</p>
        </div>

        <div class="col-6">
            <label for="Color">Teléfono:</label>
            <p>657 36 27 36</p>
        </div>

    </div>
    
</div>`);
    markers.addLayer(marker)
    }


    map.addLayer(markers);

    function getRandom(min, max) {
    return Math.random() * (max - min) + min;
    }

    $( ".masInfo" ).click(function(ev) {
        ev.preventDefault();

        alert( "Handler for .click() called." );

    });



})


































/*var map = L.map('map').setView([37.344,-4.548], 8); // Andalucía

var cartodbLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

function popUpInfo(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.nomb_mus) {
    	layer.bindPopup("<b>"+feature.properties.nomb_mus+"</b><br>"+feature.properties.municipio+" ("+feature.properties.provincia+")");
        //layer.bindPopup("<b>"+feature.properties.nomb_mus);
    }
}

var geoJsonLayer = L.geoJson(museos, {
	onEachFeature: popUpInfo
}
);

var markers = L.markerClusterGroup();
markers.addLayer(geoJsonLayer);
map.addLayer(markers);
map.fitBounds(markers.getBounds());*/

