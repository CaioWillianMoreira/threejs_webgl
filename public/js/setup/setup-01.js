// Cria o renderer "canvas com largura e altura"
const options = {
  targetSelector: '#scene', // Onde o renderer deve desenhar > id #scene
  with: 800,
  height: 600,
  backgroundColor: 0x3498eb // seta cor
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

// instancia a cor no objeto
scene.background = new THREE.Color(
  options.backgroundColor
);

// Cria Camera | existem diversas cameras, essa é em perspectiva
const camera = new THREE.PerspectiveCamera(
  50, options.with / options.height // aspect ratio | Qual vai ser a proporção da câmera
);

// Posiciona a altura da câmera
camera.position.z = 5;
