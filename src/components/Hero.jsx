import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Loader } from "../components";
import Ring from "../models/Ring";
import { Sky } from "../models/Sky";
import { Environment, OrbitControls } from "@react-three/drei";

const Hero = () => {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-black ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        dpr={[1, 2]}
        camera={{ position: [100, 160, 100], fov: 5 }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight intensity={0.9} />
        <spotLight position={[50, 50, -30]} castShadow />
        <pointLight position={[-10, -10, -10]} color="red" intensity={0.7} />
        <pointLight position={[0, -5, 5]} intensity={0.5} />
        <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
        <OrbitControls />
        <Suspense fallback={<Loader />}>
          <Sky />
          <Environment preset="warehouse" />
          <Ring />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
