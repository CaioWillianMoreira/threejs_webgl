// Cria o renderer "canvas com largura e altura"
const options = {
  targetSelector: '#scene', // Onde o renderer deve desenhar > id #scene
  with: 800,
  height: 600
}

const renderer = new THREE.WebGLRenderer();

renderer.setSize(
  options.with, options.height
);

document.querySelector(
  options.targetSelector
).appendChild(renderer.domElement);


// Cria a scena
const scene = new THREE.Scene();
