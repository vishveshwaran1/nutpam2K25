import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/card.glb"); // put your .glb file inside public/
  return <primitive object={scene} scale={2} />;
}

const BackgroundModel = () => {
  return (
    <div className="fixed inset-0 -z-10"> {/* stays behind all content */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} />
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default BackgroundModel;
