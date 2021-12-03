// Criação de um cubo - Conceitos de objetos 3D
/*
  Geometry | Material | Mesh
*/

const geometry = new THREE.BoxBufferGeometry(); // cria caixa
const material = new THREE.MeshBasicMaterial( // cria material básico
  { color: 0xeb3468 } // altera a cor do cubo
);

const cube = new THREE.Mesh(
  geometry, material
);

scene.add(cube);

// Animação do cubo
cube.rotation.x = 90;
cube.rotation.y = 90;

// pede pro render desenhar

renderer.render(scene, camera);
