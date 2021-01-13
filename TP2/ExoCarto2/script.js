
let latitudeBermude = 25.000007;
let longitudeBermude = -71.000080;

navigator.geolocation.getCurrentPosition(function(pos){
    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    let accuracy = pos.coords.accuracy;

    var layer = new L.StamenTileLayer("toner");
    var stamen = new L.Map("stamen", {
        center: new L.LatLng(latitudeBermude, longitudeBermude),
        zoom: 5
        });
    stamen.addLayer(layer);
    var triangle = L.polygon([
        [25.806058, -79.789341],
        [18.790878, -66.700616],
        [32.223518, -64.867937]],
        {
            color:'red',
            fillColor:'red',
            fillOpacity:0.1
        }
    ).addTo(stamen);
    triangle.bindPopup("Triangle des bermudes");

    var circle = L.circle([latitude, longitude], {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0,
        radius: accuracy
    }).addTo(stamen);
    circle.bindPopup("Cercle autour de ma position");
});