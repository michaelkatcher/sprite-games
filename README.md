# 2D RPG MVP

## Overview
This project is a 2D overhead RPG MVP built with Phaser 3. The game features:
- Tile-based grid movement
- Turn-based combat
- Limited-slot inventory system
- NPC interactions with basic dialogue
- A modular, scene-based architecture designed for future expansion

## Directory Structure
project-root/ 
├── index.html 
├── README.md
├── /src 
│ ├── main.js 
│ ├── scenes/ 
│ │ ├── OverworldScene.js 
│ │ ├── CombatScene.js 
│ │ └── UIScene.js 
│ └── entities/ 
│ └── Player.js 
├── /assets 
│ ├── player.png 
│ ├── npc.png 
│ └── tiles.png 
└── /data 
├── items.json 
├── dialogues.json 
└── enemyStats.json


## Implementation Details

### Phaser Setup
- The game is initiated in `main.js` where the Phaser game configuration is defined.
- Three scenes are used: 
  - **OverworldScene** for exploration and NPC interactions.
  - **CombatScene** for turn-based battles.
  - **UIScene** for overlays like dialogue boxes and inventory.

### Scene Descriptions
- **OverworldScene:** Implements grid-based movement and triggers dialogues when the player overlaps with an NPC. Uses JSON data for dialogue content.
- **CombatScene:** Provides a simple turn-based combat simulation. Turns progress on key input.
- **UIScene:** Listens for events (such as `showDialogue`) to display UI elements like dialogue and inventory.

### Data Handling
- Game content is stored in JSON files within the `/data` directory.
- These files (e.g., `items.json`, `dialogues.json`, `enemyStats.json`) can be easily updated or later migrated to a database for dynamic content management.

### Event Systemaaaaaaaaaaaaaa
- Phaser’s built-in event dispatcher is used to decouple UI updates from game logic. For example, overlapping with an NPC in the OverworldScene triggers a dialogue event that the UIScene handles.

## Setup Instructions

### Replit Setup
1. Create a new Replit project using an HTML/CSS/JS template.
2. Upload all project files and ensure the directory structure is maintained.
3. Open `index.html` in the live preview to run the game.

### GitHub Workflow
1. Initialize your repository:
   ```bash
   git init
