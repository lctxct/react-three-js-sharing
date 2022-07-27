import { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Not really
const World = () => {
    return (
        <Canvas>
            <color attach="background" args={["#FFFFF8"]} />
            <ambientLight intensity={1} />
            <SolarSystem />
        </Canvas>
    )
}

const SolarSystem = () => {

    return (
        <>
        </>
    )
}

const CelestialBody = ({
    color,
    scale,
    handleFrame = () => {},
    opacity = "1",
    position = null,
    ...props
}) => {

    return (
        <mesh>
            <icosahedronGeometry />
            <meshStandardMaterial />
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
