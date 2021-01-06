function success(position){
    console.log(position.coords);
}
navigator.geolocation.getCurrentPosition(success);
