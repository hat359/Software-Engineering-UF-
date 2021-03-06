import * as React from "react";
import { Grid, Card, Container } from '@mui/material'
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";


// Round number up to nearest step for better canvas performance
const round = (n: number, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * 3;
  },
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 10);
};

export default function App() {
  

  return (
    <Container align="center" sx={{m:5}} className="Bacc" maxWidth="lg">
      <div className="particle">
    <ParticleImage 
      src={"/gators.png"}
      height={300}
      width={500}
      scale={3}
      entropy={10}
      maxParticles={7500}
      particleOptions={particleOptions}
    
      backgroundColor="white"
    /></div>
    </Container>
  );
}
