import { useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Not really
const World = () => {
    return (
        <Canvas>
            <CameraController />
            <color attach="background" args={["#FFFFF8"]} />
            <ambientLight intensity={1} />
            <directionalLight position={[0,0,0]} color="#ffff00" />
            <directionalLight position={[0,0,1]} />
            <SolarSystem />
        </Canvas>
    )
}

const SolarSystem = () => {
    const solarSystem = useRef();
    const earth = useRef();

    useFrame((state, delta) => {
        solarSystem.current.rotation.y += 0.01;
        earth.current.rotation.y += 0.05;
    });

    return (
        <object3D ref={solarSystem}>
            <CelestialBody color="yellow" scale="2" handleFrame={(mesh) => mesh.current.rotation.y += 0.01}/>
            <object3D ref={earth} position={[3,0,0]} >
                <CelestialBody color="blue" scale="0.5" handleFrame={(mesh) => mesh.current.rotation.y -= 0.02} />
                <CelestialBody color="grey" scale="0.1" handleFrame={(mesh) => mesh.current.rotation.y += 0.01} position={[0.8,0,0]} />
            </object3D>
        </object3D>
    )
}

const CelestialBody = ({
    color,
    scale,
    handleFrame = () => {},
    position = null,
    ...props
}) => {
    const mesh = useRef();
    useFrame(() => handleFrame(mesh));

    return (
        <mesh ref={mesh} position={position} scale={scale}>
            <icosahedronGeometry />
            <meshStandardMaterial opacity="0" color={color} />
        </mesh>
    )
}

// Camera with a view that can be moved around
export const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
       () => {
          const controls = new OrbitControls(camera, gl.domElement);

          // Control settings
          // controls.enableRotate = false;
          // controls.enableZoom = false;
          // controls.enablePan = false;

          // Limiting zoom
          // controls.minDistance = 5;
          // controls.maxDistance = 20;

          // Limiting horizontal rotation
          // controls.minAzimuthAngle = - Infinity; // default
          // controls.maxAzimuthAngle = Infinity; // default

          // Limiting vertical rotation
          // controls.minPolarAngle = 0; // default
          // controls.maxPolarAngle = Math.PI; // default

          return () => {
            controls.dispose();
          };
       },
       [camera, gl]
    );
    return null;
 };

export default World;
