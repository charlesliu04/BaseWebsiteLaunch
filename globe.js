
document.addEventListener('DOMContentLoaded', () => {
  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globeContainer').appendChild(renderer.domElement);

   
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x585858, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

   
    camera.position.z = 15;

    const light = new THREE.PointLight(0xffffff, 0.1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

  

    function animate() {
        requestAnimationFrame(animate);
    
        
        sphere.rotation.y += 0.001;
        sphere.rotation.x += 0.001; 
        sphere.rotation.z += 0.001; 

        renderer.render(scene, camera);
    }
    

  
    animate();

   
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});





    

    




