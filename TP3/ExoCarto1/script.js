function draw(){
    var canvas = document.getElementById("canvas");
    var dessin = canvas.getContext("2d");
    var img = new Image();
    img.onload = function(){
        dessin.drawImage(img, 0, 0);
        
        dessin.fillStyle = 'brown';
        dessin.fillRect(30, 400, 300, 300);

        dessin.fillStyle = 'green';
        dessin.fillRect(40, 500, 100, 200)

        dessin.beginPath();
        dessin.fillStyle = 'blue'
        dessin.moveTo(30, 400);
        dessin.lineTo(175, 200);
        dessin.lineTo(330, 400);
        dessin.fill();

        dessin.beginPath();
        dessin.fillStyle = 'yellow'
        dessin.arc(1400, 100, 50, 0, 2 * Math.PI);
        dessin.fill();
    }
    img.src = "Minas_Tirith.jpg";
}

document.getElementById("soleil").addEventListener("click", function(){
    var ciel = document.getElementById("ciel");
    if(ciel.style.fill == "blue"){
        ciel.style.fill = "lightblue"
    }
    else{
        ciel.style.fill = "blue";
    }
})

document.getElementById("porte").addEventListener("mouseover", function(){
    var porte = document.getElementById("porte");
    porte.style.fill = "purple";
})

document.getElementById("porte").addEventListener("mouseout", function(){
    var porte = document.getElementById("porte");
    porte.style.fill = "maroon";
})