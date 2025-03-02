export default class OverworldScene extends Phaser.Scene {
  constructor() {
    super({ key: 'OverworldScene' });
  }

  preload() {
    // Preload assets and JSON data
    this.load.image('player', '../assets/player.png');
    this.load.image('npc', '../assets/npc.png');
    this.load.image('tiles', '../assets/tiles.png');
    this.load.json('dialogues', '../data/dialogues.json');
  }

  create() {
    // For simplicity, add a background image (placeholder for a tilemap)
    this.add.image(400, 300, 'tiles');

    // Create the player sprite and enable physics
    this.player = this.physics.add.sprite(400, 300, 'player');
    this.player.setCollideWorldBounds(true);

    // Create an NPC for dialogue
    this.npc = this.physics.add.staticSprite(500, 300, 'npc');

    // Set up keyboard input for grid-based movement
    this.cursors = this.input.keyboard.createCursorKeys();

    // Grid settings
    this.tileSize = 32;
    this.moving = false;

    // Set up collision/overlap to trigger dialogue with NPC
    this.physics.add.overlap(this.player, this.npc, this.triggerDialogue, null, this);
  }

  update() {
    // Allow movement only if not currently tweening (moving)
    if (!this.moving) {
      let moved = false;
      let newX = this.player.x;
      let newY = this.player.y;

      if (Phaser.Input.Keyboard.JustDown(this.cursors.left)) {
        newX -= this.tileSize;
        moved = true;
      } else if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) {
        newX += this.tileSize;
        moved = true;
      } else if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
        newY -= this.tileSize;
        moved = true;
      } else if (Phaser.Input.Keyboard.JustDown(this.cursors.down)) {
        newY += this.tileSize;
        moved = true;
      }

      if (moved) {
        this.moving = true;
        this.tweens.add({
          targets: this.player,
          x: newX,
          y: newY,
          duration: 200,
          onComplete: () => { this.moving = false; }
        });
      }
    }
  }

  triggerDialogue() {
    // Get dialogue text from the JSON data
    const dialogues = this.cache.json.get('dialogues');
    const dialogueText = dialogues.npc1 || "Hello!";

    // Emit an event to the UIScene to display dialogue
    this.scene.get('UIScene').events.emit('showDialogue', dialogueText);
  }
}
