// Criação de um cubo - Conceitos de objetos 3D
/*
  Geometry | Material | Mesh
*/

const geometry = new THREE.BoxBufferGeometry(); // cria caixa
const material = new THREE.MeshBasicMaterial(); // cria material básico

const cube = new THREE.Mesh(
  geometry, material
);

scene.add(cube);
