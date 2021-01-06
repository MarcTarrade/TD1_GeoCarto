function successWatch(position){
    document.getElementById("latitude").innerHTML = position.coords.latitude;
    document.getElementById("longitude").innerHTML = position.coords.longitude;
    document.getElementById("precision").innerHTML = position.coords.accuracy;
    if(position.coords.speed == null){
        document.getElementById("vitesse").innerHTML = "Necessite de le faire sur téléphone";
    }
    else{
        document.getElementById("vitesse").innerHTML = position.coords.speed;
    }
    document.getElementById("timeStamp").innerHTML = position.timestamp;
    console.log(position);
}

function successPos(position){
    document.getElementById("latitude").innerHTML = position.coords.latitude;
    document.getElementById("longitude").innerHTML = position.coords.longitude;
    document.getElementById("precision").innerHTML = position.coords.accuracy;
    if(position.coords.speed == null){
        document.getElementById("vitesse").innerHTML = "Necessite de le faire sur téléphone";
    }
    else{
        document.getElementById("vitesse").innerHTML = position.coords.speed;
    }
    document.getElementById("timeStamp").innerHTML = position.timestamp;
    console.log(position);
}

navigator.geolocation.getCurrentPosition(successPos);
navigator.geolocation.watchPosition(successWatch)
