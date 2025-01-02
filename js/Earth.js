export class Earth {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.radius = 250;
    this.rotation = 0;
    this.image = new Image();
    this.image.src = '/earth-map.png';
    this.loaded = false;
    
    this.image.onload = () => {
      this.loaded = true;
    };
  }

  render() {
    if (!this.loaded) return;

    const centerX = this.width / 2;
    const centerY = this.height / 2;
    
    // Save context state
    this.ctx.save();
    this.ctx.translate(centerX, centerY);
    
    // Create gradient for the glow effect
    const gradient = this.ctx.createRadialGradient(0, 0, this.radius, 0, 0, this.radius * 1.5);
    gradient.addColorStop(0, 'rgba(0, 100, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 100, 255, 0)');
    
    // Draw glow
    this.ctx.beginPath();
    this.ctx.arc(0, 0, this.radius * 1.5, 0, Math.PI * 2);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    
    // Draw Earth
    this.ctx.rotate(this.rotation);
    this.ctx.drawImage(
      this.image,
      -this.radius,
      -this.radius,
      this.radius * 2,
      this.radius * 2
    );
    
    this.ctx.restore();
    
    // Update rotation
    this.rotation += 0.001;
  }
}