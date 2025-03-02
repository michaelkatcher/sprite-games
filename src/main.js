import OverworldScene from './scenes/OverworldScene.js';
import CombatScene from './scenes/CombatScene.js';
import UIScene from './scenes/UIScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [OverworldScene, CombatScene, UIScene],
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  }
};

const game = new Phaser.Game(config);
