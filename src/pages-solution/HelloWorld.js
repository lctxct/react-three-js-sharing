import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const HelloWorld = () => {
  const colours = ["#FF88DD", "#6EE1FF", "#FFF053"];
  const coordinates = [];
  for (let x = -3; x < 3; x++) {
    for (let z = -3; z < 3; z++) {
      coordinates.push([x, 0, z]);
    }
  }

  return (
    <Canvas>
      <color attach="background" args={["#FFFFF8"]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 5]} />
      <group rotation={[0.8, -1, 0]} position={[0, 1, 0]}>
        {coordinates.map((coordinate) => (
          <Box
            position={coordinate}
            color={colours[Math.floor(Math.random() * 3)]}
            height={Math.random()}
          />
        ))}
      </group>
    </Canvas>
  );
};

const Box = ({ position, color, height, ...props }) => {
  // Provides direct access to mesh 
  const mesh = useRef();
  // Rotate box around x-axis 
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  return (
    <mesh
      ref={mesh}
      position={position}
      rotation={[0, 0, 0]}
    >
      <boxGeometry args={[0.6, height, 0.6]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default HelloWorld;
