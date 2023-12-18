import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="flex justify-center items-center absolute top-20 left-0 right-0 z-10">
        POPUP
      </div> */}

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
