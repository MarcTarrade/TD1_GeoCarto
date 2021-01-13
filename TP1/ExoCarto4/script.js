window.addEventListener("touchstart", success);

function success(evt){
    document.getElementById("touchPos").innerHTML = evt.touches[0].pageX + " , " + evt.touches[0].pageY;
    document.getElementById("touchEvt").innerHTML = evt.type;
}