import * as THREE from "three";
import "./App.css";

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x111111 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  return (
    <>
      <div className="App">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus
        vero modi molestiae! Eveniet voluptate inventore tenetur nam ipsam natus
        incidunt eius, fuga sequi, accusamus aut expedita corrupti sint at
        officiis deleniti distinctio provident necessitatibus velit nostrum nemo
        illo voluptatum et suscipit. Hic tempora eius quae dignissimos modi iste
        id?
      </div>
    </>
  );
}

export default App;
