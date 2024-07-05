import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Loader } from "../components";
import SpaceStation from "../models/SpaceStation";
import { Environment, OrbitControls } from "@react-three/drei";

const SpaceScene = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-black`}
        dpr={[1, 2]}
        camera={{ position: [100, 260, 10], fov: 1.5 }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight intensity={0.9} />
        <spotLight position={[50, 50, -30]} castShadow />
        <pointLight position={[-10, -10, -10]} color="red" intensity={0.7} />
        <pointLight position={[0, -5, 5]} intensity={0.5} />
        <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
        <OrbitControls />
        <Suspense fallback={<Loader />}>
          <SpaceStation />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default SpaceScene;
