//Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(2,0,5);

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const texture = new THREE.TextureLoader().load( 'terre.jpg' );

// immediately use the texture for material creation
const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
const sphere = new THREE.Mesh( geometry, materialTex );

//cube.position.set(2,0,-1);
scene.add( sphere );

const controls = new THREE.OrbitControls( camera, renderer.domElement );


// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
scene.add( directionalLight );


//Affiche un marqueur sur notre position
navigator.geolocation.getCurrentPosition(function(pos){
    var position = toCartesien(pos.coords.latitude, pos.coords.longitude);

    //Marqueur
    const geo = new THREE.SphereGeometry(0.01, 32, 32);
    const mat = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const mark = new THREE.Mesh( geo, mat );
    mark.position.set(position[0], position[1], position[2]);
    scene.add( mark );
})


//Get les pays avec l'api
var xmlhttp = new XMLHttpRequest();
xmlhttp.addEventListener("load", function(){
    var json = JSON.parse(this.responseText);

    var mat;
    var geo;
    var texture;
    var mark;
    var material;
    for (let i = 0; i < json.length; i++) {
        //json[i].flag
        //json[i].latlng
        var position = toCartesien(json[i].latlng[0], json[i].latlng[0]);

        //Marqueur
        geo = new THREE.SphereGeometry(0.01, 32, 32);
        mat = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        mark = new THREE.Mesh( geo, mat );
        mark.position.set(position[0], position[1], position[2]);
        scene.add( mark );
    }
})
xmlhttp.open("GET", "https://restcountries.eu/rest/v2/region/Europe");
xmlhttp.send();

const animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };
    animate();


var toCartesien = function(l, lo){
    //Conversion en radians
    var lat = l * Math.PI / 180.0;
    var long = -lo * Math.PI / 180.0;
    var res = [];
    const rayon = 1;
    //Conversion en cartesien
        var x = rayon * Math.cos(lat) * Math.cos(long);
        res.push(x);
        var y = rayon * Math.sin(lat)
        res.push(y)
        var z = rayon * Math.cos(lat) * Math.sin(long);
        res.push(z);
        return res;
}