function successWatch(position){
    document.getElementById("latitude2").innerHTML = position.coords.latitude;
    document.getElementById("longitude2").innerHTML = position.coords.longitude;
    document.getElementById("precision2").innerHTML = position.coords.accuracy;
    if(position.coords.speed == null){
        document.getElementById("vitesse2").innerHTML = "Necessite de le faire sur téléphone";
    }
    else{
        document.getElementById("vitesse2").innerHTML = position.coords.speed;
    }
    document.getElementById("timeStamp").innerHTML = position.timestamp;
    console.log(position);
}

function successPos(position){
    document.getElementById("latitude1").innerHTML = position.coords.latitude;
    document.getElementById("longitude1").innerHTML = position.coords.longitude;
    document.getElementById("precision1").innerHTML = position.coords.accuracy;
    if(position.coords.speed == null){
        document.getElementById("vitesse1").innerHTML = "Necessite de le faire sur téléphone";
    }
    else{
        document.getElementById("vitesse1").innerHTML = position.coords.speed;
    }
    console.log(position);
}

function erreur(err){
    console.warn(err);
}

navigator.geolocation.getCurrentPosition(successPos, erreur);
navigator.geolocation.watchPosition(successWatch, erreur);
