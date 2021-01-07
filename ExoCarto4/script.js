window.addEventListener("touchstart", success);

function success(evt){
    document.getElementById("touchPos").innerHTML = evt.touches.pageX + " , " + evt.pageY;
    document.getElementById("touchEvt").innerHTML = evt.touches.type;
}