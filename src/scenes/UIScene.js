export default class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UIScene', active: true });
  }

  create() {
    // Listen for dialogue events triggered from other scenes
    this.events.on('showDialogue', this.displayDialogue, this);

    // Set up inventory UI (starting empty)
    this.inventoryText = this.add.text(600, 10, 'Inventory:', { font: '16px Arial', fill: '#ffffff' });
    this.inventory = [];
  }

  displayDialogue(dialogueText) {
    // Create a semi-transparent dialogue box
    const dialogueBox = this.add.rectangle(400, 550, 780, 80, 0x000000, 0.8);
    const dialogueContent = this.add.text(30, 520, dialogueText, { font: '18px Arial', fill: '#ffffff', wordWrap: { width: 760 } });

    // Remove the dialogue box after 3 seconds (or on click for further interaction)
    this.time.delayedCall(3000, () => {
      dialogueBox.destroy();
      dialogueContent.destroy();
    });
  }

  // Method to update the inventory (to be triggered by an event such as item pickup)
  updateInventory(item) {
    this.inventory.push(item);
    this.inventoryText.setText('Inventory: ' + this.inventory.join(', '));
  }
}
