export default class Player {
  constructor(scene, x, y, spriteKey) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, spriteKey);
    this.state = 'idle'; // Initial state
  }

  move(direction) {
    if (this.state === 'idle') {
      this.state = 'moving';
      let newX = this.sprite.x;
      let newY = this.sprite.y;
      const tileSize = 32;

      switch(direction) {
        case 'left': newX -= tileSize; break;
        case 'right': newX += tileSize; break;
        case 'up': newY -= tileSize; break;
        case 'down': newY += tileSize; break;
      }

      // Tween to the new grid position then return to idle state
      this.scene.tweens.add({
        targets: this.sprite,
        x: newX,
        y: newY,
        duration: 200,
        onComplete: () => { this.state = 'idle'; }
      });
    }
  }
}
