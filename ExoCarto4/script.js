window.addEventListener("touchstart", success);

function success(evt){
    document.getElementById("touchPos").innerHTML = evt.pageX + " , " + evt.pageY;
    document.getElementById("touchEvt").innerHTML = evt.type;
}