function successPos(position){
    document.getElementById("latitude").innerHTML = position.coords.latitude;
    document.getElementById("longitude").innerHTML = position.coords.longitude;
    document.getElementById("precision").innerHTML = position.coords.accuracy;
    document.getElementById("vitesse").innerHTML = position.coords.speed;
    document.getElementById("timeStamp").innerHTML = position.timestamp;
    console.log(position);
}
navigator.geolocation.watchPosition(successPos);
