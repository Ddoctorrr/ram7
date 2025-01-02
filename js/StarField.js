export class StarField {
  constructor() {
    this.stars = [];
    this.generateStars();
  }

  generateStars() {
    // Generate fewer stars (50 instead of 100) with more disorder
    for (let i = 0; i < 50; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.5, // Increased randomness in speed
        blinkSpeed: Math.random() * 0.02,
        blinkOffset: Math.random() * Math.PI * 2
      });
    }
  }

  render(ctx) {
    const time = Date.now() * 0.001;
    
    this.stars.forEach(star => {
      // Add some horizontal movement for more disorder
      star.x += Math.sin(time + star.blinkOffset) * 0.2;
      star.y = (star.y + star.speed) % window.innerHeight;
      
      // Wrap around horizontally
      if (star.x < 0) star.x = window.innerWidth;
      if (star.x > window.innerWidth) star.x = 0;
      
      const brightness = 0.5 + 0.5 * Math.sin(time * star.blinkSpeed + star.blinkOffset);
      const finalOpacity = star.opacity * brightness;
      
      ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}