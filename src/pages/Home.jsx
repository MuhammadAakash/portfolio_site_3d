import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

const Home = () => {
  const adjustIslandForScreenSizes = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [isLandScale, isLandPosition, isLandRotation] =
    adjustIslandForScreenSizes();

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
          {/* Sun light or Direct Light */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* It elaminates all objects in the scene equally without casting shadows */}
          <ambientLight intensity={0.5} />
          {/* It Emits light in all the direction from a single point */}
          {/* <pointLight /> */}

          {/* It emits lights from one direction but in the shape of the cone  */}
          {/* <spotLight /> */}

          {/* it eluminates the scene with the gradient */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky />
          <Island
            position={isLandPosition}
            scale={isLandScale}
            rotation={isLandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
