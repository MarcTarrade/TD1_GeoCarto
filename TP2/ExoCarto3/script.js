var latitude = 43.705759;
var longitude = 7.262399;

var maMap = L.map('mapid').setView([latitude,longitude], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFyY3RhcnJhZGUiLCJhIjoiY2tqdjZ1OXdzMDVqejJubHM5ajQwZWwwOSJ9.jTuNz4pkBKO06JCKcub2fA'
}).addTo(maMap);

var json = new L.geoJson("http://opendata.nicecotedazur.org/data/storage/f/2020-02-03T14%3A09%3A34.406Z/signca-ec-voies-velo.geojson");
json.addTo(maMap);

// L.geoJson(json, {
//     style: {
//         "color":"blue",
//     }
// }).addTo(maMap);
