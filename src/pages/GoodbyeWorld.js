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
    )
}

const Kirb = () => {
    // useEffect(() => {
    //     document.addEventListener("keydown", handleKeyPress);
    //     return () => {
    //         document.removeEventListener("keydown", handleKeyPress);
    //     };
    // }, []);

    const handleKeyPress = (event) => {
        // TODO: move kirby 
        // if (event.key ...)
    }

    return (
        <object3D>
        </object3D>
    )
}

export default GoodbyeWorld;
