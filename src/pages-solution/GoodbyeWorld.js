import { CameraController } from "./World";
import { useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GoodbyeWorld = () => {
  return (
    <Canvas>
      <CameraController />
      <color attach="background" args={["#FFFFF8"]} />
      <ambientLight />
      <directionalLight position={[0, 0, 1]} intensity={0.3} />
      <Kirb />
    </Canvas>
  );
};

const Kirb = () => {
  const kirb = useRef();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "ArrowLeft") {
      kirb.current.position.z = kirb.current.position.z + 0.3;
    } else if (event.key === "ArrowRight") {
      kirb.current.position.z = kirb.current.position.z - 0.3;
    }
  };

  const gltf = useLoader(GLTFLoader, "/kirb.glb");

  return (
    <object3D ref={kirb} rotation={[0,0,0]} position={[0,0,-2]}>
      <primitive
        object={gltf.scene}
        position={[0,0,0]}
        scale={0.3}
        rotation={[0,0,0]}
      />
    </object3D>
  );
};

export default GoodbyeWorld;
