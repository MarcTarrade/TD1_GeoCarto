var latitude;
var longitude;

navigator.geolocation.getCurrentPosition(function(pos){
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
    var maMap = L.map('mapCanvas').setView([latitude,longitude], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFyY3RhcnJhZGUiLCJhIjoiY2tqdjZ1OXdzMDVqejJubHM5ajQwZWwwOSJ9.jTuNz4pkBKO06JCKcub2fA'
    }).addTo(maMap);
    window.addEventListener("deviceorientation", function(device){
        document.getElementById("text").innerHTML = device.alpha;
    drawCanvas(device.alpha);
    })
});

function drawCanvas(angle){
    var canvas = document.getElementById("canvas");
    var dessin = canvas.getContext("2d");
    var bousole = new Image();
    bousole.onload = function(){
        dessin.drawImage(bousole, 0, 0);
        var fleche = new Image();
        fleche.onload = function(){
            dessin.drawImage(fleche, 0, 0);
            dessin.translate(100, 100);
            dessin.rotate(angle * Math.PI / 180);
            dessin.translate(-100, -100);
            
        }
        fleche.src = "needle.png"
    }
    bousole.src = "compass.png";
}

function drawSvg(){

}