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

                        <div class="row">
                            <div class="imagen">
                                <img src="perro.jpg" class="col-12" alt="">
                            </div>
                        </div>

                        <div class="row">  

                            <div class="col-5 offset-1">
                                <label for="Nombre">Nombre:</label>
                                <p>Yogui</p>
                            </div>

                            <div class="col-5 offset-1">
                                <label for="Tipo">Especie:</label>
                                <p>Perro</p>
                            </div>

                            <div class="col-5 offset-1">
                                <label for="Raza">Raza:</label>
                                <p>Labrador</p>
                            </div>

                            <div class="col-5 offset-1">
                                <label for="Color">Color:</label>
                                <p>Blanco</p>
                            </div>

                            <div class="col-11 offset-1">
                                <label for="Color" class="">Descripción:</label>
                                <p class="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quam sit at adipisci odio accusantium cum, facilis sapiente temporibus saepe facere? Fuga nam aut ipsam, totam maxime ex libero ratione.</p>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <i class="fas fa-caret-down subir"></i>
                            </div>

                            <div class="col-8 offset-1">
                                <h5>Contacto:</h5>
                            </div>

                            <div class="col-5 offset-1">
                                <label for="Color">Email:</label>
                                <p>bdsfihb@gmail.com</p>
                            </div>

                            <div class="col-5 offset-1">
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

        alert( "hhh." );

    });



    $( ".leaflet-popup-pane" ).on( 'click', ".subir" ,function() {  // Controlamos el click del icono de expandir

        $(".leaflet-popup-content-wrapper").toggleClass("expanded"); // Cambiamos la clase del contenedor

        if($(".subir").attr("class") == "fas fa-caret-down subir"){  // Cambiamos el icono cuando se pulse

            $(".subir").attr("class","fas fa-caret-up subir");

        }
        else{

            $(".subir").attr("class","fas fa-caret-down subir");

        }

       

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

