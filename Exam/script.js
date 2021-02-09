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
        drawCanvas(device.alpha);
        rotateSvg(device.alpha)
    })
});

function drawCanvas(angle){
    var canvas = document.getElementById("canvas");
    var dessin = canvas.getContext("2d");
    var boussole = new Image();
    boussole.onload = function(){
        dessin.drawImage(boussole, 0, 0);
        var fleche = new Image();
        fleche.onload = function(){
            dessin.drawImage(fleche, 0, 0);
            dessin.translate(100, 100);
            dessin.rotate(angle);
            dessin.translate(-100, -100);
            
        }
        fleche.src = "needle.png"
    }
    boussole.src = "compass.png";
}

function rotateSvg(angle){
    var fleche = document.getElementById("fleche");

    fleche.setAttribute("transform", "translate(100, 100) rotate(" + angle + ") translate(-100, -100)")
}

var map = new L.Map('map', {zoom: 12, center: new L.latLng([42.5,12.5]) });

	map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));

	var comp = new L.Control.Compass({autoActive: true, showDigit:true});

	map.addControl(comp);