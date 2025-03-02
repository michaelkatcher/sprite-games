export default class CombatScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CombatScene' });
  }

  preload() {
    // Preload an enemy asset for combat
    this.load.image('enemy', '../assets/enemy.png');
  }

  create() {
    // Display basic combat text
    this.add.text(300, 50, 'Turn-Based Combat', { font: '24px Arial', fill: '#ffffff' });

    // Create an enemy sprite placeholder
    this.enemy = this.add.sprite(400, 300, 'enemy');

    // Initialize turn order
    this.currentTurn = 'player';

    // Listen for a key press (SPACE) to process turns
    this.input.keyboard.once('keydown-SPACE', () => {
      this.processTurn();
    });

    // Create a back button to return to the overworld
    const backText = this.add.text(10, 10, 'Back', { font: '16px Arial', fill: '#ff0000' });
    backText.setInteractive();
    backText.on('pointerdown', () => {
      this.scene.start('OverworldScene');
    });
  }

  processTurn() {
    if (this.currentTurn === 'player') {
      // Simulate player's turn
      this.add.text(300, 100, 'Player attacks!', { font: '20px Arial', fill: '#00ff00' });
      this.currentTurn = 'enemy';
      // Delay before enemy's turn
      this.time.delayedCall(1000, () => { this.processTurn(); });
    } else {
      // Simulate enemy's turn
      this.add.text(300, 150, 'Enemy attacks!', { font: '20px Arial', fill: '#ff0000' });
      this.currentTurn = 'player';
      // After a short delay, return to the overworld (or continue combat)
      this.time.delayedCall(1000, () => { 
        this.scene.start('OverworldScene');
      });
    }
  }
}
