import React from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";

const Heart = () => {
  const particlesInit = async (engine) => {
    await loadFirePreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "fire", // Applying the fire preset
        fullScreen: { enable: true },
      }}
    />
  );
};

export default Heart;
