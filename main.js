import './style.css'

import * as THREE from 'three';

import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Mesh, MeshStandardMaterial } from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,5000);
//camera.rotation.x = t*0.1;
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bagground')
});
const pointlight = new THREE.PointLight(0xffffff);
pointlight.position.set(0,0,0);

const ambientlight = new THREE.AmbientLight(0xffffff);
scene.add(pointlight, ambientlight);

const lightHelper = new THREE.PointLightHelper(pointlight);
//scene.add(lightHelper);

const gridhelper = new THREE.GridHelper(200,50);
//    scene.add(gridhelper);
const helper = new THREE.CameraHelper( camera );
//scene.add( helper );
const controls = new OrbitControls(camera, renderer.domElement);


//texts
const loader = new FontLoader();

loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
	const text1 = new TextGeometry( 'Jared website', {
		font: font,
		size: 20,
		height: 5,
		curveSegments: 3,
		bevelEnabled: true,
		bevelThickness: -10,
		bevelSize: 0,
		bevelOffset: 0,
		bevelSegments: 1
	} );
  const textmaterial = new THREE.MeshBasicMaterial( {color: 0xffffff } );
  const text = new THREE.Mesh(text1,textmaterial);
  text.position.set(-70,0,-200)
  scene.add(text);
  
} );




//scroll
function movecamera(){
  const t = document.body.getBoundingClientRect().top;
 // sun.rotation.x += 0.05;
  //sun.rotation.y += 0.015;
 // sun.rotation.z += 0.05;
 moon.rotation.y += 0.02;
 earth.rotation.y -= 0.015;
  me.rotation.y += 0.01;
  me.rotation.z += 0.01;

  camera.position.z = t * -0.4;
  camera.position.x = t * -0.03;
  camera.position.y = t * -0.0002;

  //console.log(camera.position.z);
}
function movecamera2(){

  const t = document.body.getBoundingClientRect().top;
  const tleft = document.body.getBoundingClientRect().left;

 moon.rotation.y += 0.02;
 earth.rotation.y -= 0.015;
  me.rotation.y += 0.01;
  me.rotation.z += 0.01;

  //camera.position.z = t * -0.03;
  camera.position.x = t * -0.03;
  camera.position.y = tleft * -0.2002;
  //camera.translateX(-10);
}
function movecamera3(){

  const t = document.body.getBoundingClientRect().top;
  const tleft = document.body.getBoundingClientRect().left;

 moon.rotation.y += 0.02;
 earth.rotation.y -= 0.015;
  me.rotation.y += 0.01;
  me.rotation.z += 0.01;

  //camera.position.z = t * -0.03;
  camera.position.x = t * -0.05;
  //camera.position.y = tleft * -10.5002;
  //camera.translateX(-10);
}
function movecamera4(){

  const t = document.body.getBoundingClientRect().top;
  const tleft = document.body.getBoundingClientRect().left;

 moon.rotation.y += 0.02;
 earth.rotation.y -= 0.015;
  me.rotation.y += 0.01;
  me.rotation.z += 0.01;

  //camera.position.z = t * -0.003;
  //camera.position.x = t * 0.01;
  camera.position.y = t * 0.01002;
  //camera.translateX(-10);
}


var a = document.body.getBoundingClientRect().top;
console.log(a)
var b =  document.body.scrollHeight - document.body.clientHeight;
var c = a/b;
//console.log(c);
if(camera.position.z >100){
  document.body.onscroll = movecamera2;
}else{
  document.body.onscroll = movecamera;
}

//animate
function animate(){
  requestAnimationFrame(animate);
  var a = document.body.getBoundingClientRect().top;
  var b =  document.body.clientHeight;
  var c = a/b;
  console.log(c)
  //0.74
  //console.log(camera.position.z);
  if(c>-0.08){
    document.body.onscroll = movecamera;
  }
  else if(c<-0.08 && c>-0.16){
    document.body.onscroll = movecamera2;
  }else {
    document.body.onscroll = movecamera3;
  }
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.001;
  torus.rotation.z += 0.005;

  Box.rotation.x+= 0.0003;
  Box.rotation.y+= 0.0003;
  Box.rotation.z+= 0.0003;
  
  Box.position.x+= 0.0123;
  Box.position.y-= 0.0013;
  Box.position.z+= 0.0003;

  //debris 2
  Box1.rotation.x-= 0.0003;
  Box1.rotation.y+= 0.0003;
  Box1.rotation.z+= 0.0003;
  
  Box1.position.x-= 0.009;
  Box1.position.y+= 0.0073;
  Box1.position.z-= 0.0053;

  //debris 3
  Box2.rotation.x+= 0.0003;
  Box2.rotation.y-= 0.0003;
  Box2.rotation.z-= 0.0003;
  
  Box2.position.x+= 0.0003;
  Box2.position.y-= 0.0103;
  Box2.position.z+= 0.0133;
  
  controls.update();
  renderer.render(scene,camera);
}
//stars
function stars(){
  const geometry3 = new THREE.SphereGeometry(0.3,24,24);
  const material3 = new MeshStandardMaterial({color:0xffffff});
  const star = new THREE.LineSegments(geometry3, material3)
  const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  const a = THREE.MathUtils.randFloatSpread(1800);
  const b = THREE.MathUtils.randFloatSpread(1800);
  const c = THREE.MathUtils.randFloatSpread(1800);
  star.position.set(a,b,c);
  scene.add(star);
}
Array(400).fill().forEach(stars); 
//scroll

const spaceTexture = new THREE.TextureLoader().load('space3.gif');
scene.background = spaceTexture;

const metexture = new THREE.TextureLoader().load('mountainbike.jpg')
const me = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3), 
  new THREE.MeshBasicMaterial({map:metexture})
);
me.position.set(0,0,-5);
//scene.add(me);

//torus
const geometryobj = new THREE.TorusGeometry(15,3,16,100);
const material = new THREE.MeshStandardMaterial({color: 0xff6347});
const torus = new THREE.Mesh(geometryobj,material);
//scene.add(torus);

//CYLINDER
//const geometry = new THREE.BoxGeometry( 5, 5, 20, 32 );
//const material5 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
//const Box = new THREE.Mesh( geometry, material5 );
//scene.add( Box );

//buildngs
const building = new THREE.BoxGeometry( 5, 5, 1,70);
const material5 = new THREE.MeshBasicMaterial( {color: 0x75706f } );
const Box = new THREE.Mesh( building, material5 );
scene.add( Box );
const building1 = new THREE.BoxGeometry( 1, 1, 10);
const Box1 = new THREE.Mesh( building1, material5 );
Box.position.setX(-100);
Box.rotateX(90);
Box1.rotateZ(10);Box1.position.setX(70);Box1.position.setY(-40);
scene.add (Box1);


const building2 = new THREE.BoxGeometry( 4, 7, 1);
const Box2 = new THREE.Mesh( building2, material5 );
Box2.rotateX(-80);
Box2.position.setX(10);
Box2.position.setY(60);

scene.add (Box2);
const building3 = new THREE.BoxGeometry( 20, 20, 200);
const Box3 = new THREE.Mesh( building1, material5 );
//SUN
const suntexture = new THREE.TextureLoader().load('sun.jfif');
const normalsun = new THREE.TextureLoader().load('sunnormal.jfif');
const sun = new Mesh(
new THREE.SphereGeometry(15,32,32),
new THREE.MeshStandardMaterial({map:suntexture,
normalMap:normalsun
})
);
sun.position.z = 30;
sun.position.setX(-10);
//scene.add(sun);
//MOON
const moontexture = new THREE.TextureLoader().load('moon.jpg');
const normalmoon = new THREE.TextureLoader().load('normalmoon.jpg');
const moon = new Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({map:moontexture,
  normalMap:normalmoon
  })
  );
  moon.position.z = 50;
  moon.position.x = 50;
//scene.add(moon);
//EARTH
const earthtexture = new THREE.TextureLoader().load('earth.jfif');
const normalearth = new THREE.TextureLoader().load('earthnormal.jfif');
const earth = new Mesh(
  new THREE.SphereGeometry(5,32,32),
  new THREE.MeshStandardMaterial({map:earthtexture,
  normalMap:normalearth
  })
  );
  earth.position.z = 110;
  earth.position.x = 0;
scene.add(earth);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

animate();


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);