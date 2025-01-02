import { StarField } from './StarField.js';
import { BackgroundCanvas } from './BackgroundCanvas.js';
import { Earth } from './Earth.js';
import { Navigation } from './Navigation.js';

// Initialize background system
const background = new BackgroundCanvas();
document.body.prepend(background.getCanvas());

const canvas = background.getCanvas();
const ctx = background.getContext();
const starField = new StarField();
const earth = new Earth(ctx, canvas.width, canvas.height);

// Initialize navigation
new Navigation();

// Animation loop
function animate() {
  background.clear();
  
  // Render earth first (background)
  earth.render();
  
  // Render stars (foreground)
  starField.render(ctx);
  
  requestAnimationFrame(animate);
}

animate();