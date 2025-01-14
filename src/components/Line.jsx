import React, { useEffect } from "react";
import * as THREE from "three";

const LinesComponent = () => {
  useEffect(() => {
    let container, clock;
    let camera, scene, renderer;
    let line;

    const segments = 200; // Reduced segments for performance improvement
    const r = 2000;
    let t = 0;

    init();

    function init() {
      container = document.getElementById("container");

      camera = new THREE.PerspectiveCamera(27, window.innerWidth / window.innerHeight, 1, 4000);
      camera.position.z = 2750;

      scene = new THREE.Scene();

      clock = new THREE.Clock();

      const geometry = new THREE.BufferGeometry();
      const material = new THREE.LineBasicMaterial({ vertexColors: true });

      const positions = [];
      const colors = [];

      for (let i = 0; i < segments; i++) {
        const x = Math.random() * r - r / 2;
        const y = Math.random() * r - r / 2;
        const z = Math.random() * r - r / 2;

        positions.push(x, y, z);

        colors.push((x / r) + 0.5);
        colors.push((y / r) + 0.5);
        colors.push((z / r) + 0.5);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      generateMorphTargets(geometry);

      geometry.computeBoundingSphere();

      line = new THREE.Line(geometry, material);
      scene.add(line);

      renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);

      container.appendChild(renderer.domElement);

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      line.rotation.x = time * 0.1;
      line.rotation.y = time * 0.01;

      t += delta * 0.5;
      line.morphTargetInfluences[0] = Math.abs(Math.sin(t));

      renderer.render(scene, camera);
    }

    function generateMorphTargets(geometry) {
      const data = [];

      for (let i = 0; i < segments; i++) {
        const x = Math.random() * r - r / 2;
        const y = Math.random() * r - r / 2;
        const z = Math.random() * r - r / 2;

        data.push(x, y, z);
      }

      const morphTarget = new THREE.Float32BufferAttribute(data, 3);
      morphTarget.name = 'target1';

      geometry.morphAttributes.position = [morphTarget];
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div className = " " id="container" style={{ width: '100%', height: '100vh' }}></div>;
};

export default LinesComponent;