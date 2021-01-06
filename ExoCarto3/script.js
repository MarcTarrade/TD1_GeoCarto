if(window.DeviceOrientationEvent && window.DeviceMotionEvent){
    window.addEventListener("deviceorientation", successOrientation);
    window.addEventListener("devicemotion", successMotion);
    document.getElementById("support").innerHTML = "Votre support prend en charge l'orientation et la rotation";
}

function successOrientation(orientation){
    document.getElementById("alphaO").innerHTML = orientation.alpha;
    document.getElementById("betaO").innerHTML = orientation.beta;
    document.getElementById("alphaO").innerHTML = orientation.gamma;
}

function successMotion(devicemotion){
    document.getElementById("x").innerHTML = devicemotion.acceleration.x;
    document.getElementById("y").innerHTML = devicemotion.acceleration.y;
    document.getElementById("z").innerHTML = devicemotion.acceleration.z;

    document.getElementById("alphaR").innerHTML = devicemotion.rotationRate.alpha;
    document.getElementById("betaR").innerHTML = devicemotion.rotationRate.beta;
    document.getElementById("gammaR").innerHTML = devicemotion.rotationRate.gamma;
}