import React from "react";
import Particles from "react-tsparticles";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";

const BG = () => {
  const particlesInit = async (engine) => {
    await loadHyperspacePreset(engine); // Load Hyperspace preset
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "hyperspace",
        particles: {
          color: { value: "#ff6b81" }, // Red color
          links: {
            color: "#ff6b81", // Red links (lines)
            enable: true,
          },
        },
      }}
    />
  );
};

export default BG;
