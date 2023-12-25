import Phaser from 'phaser';
import PlayScene from './scenes/playScene';
import MenuScene from './scenes/menuScene';
import PreloadScene from './scenes/preloadScene';
import ScoreScene from './scenes/scoreScene';
import PauseScene from './scenes/pauseScene';

const WIDTH = 400;
const HEIGHT = 600;
const BIRD_POSITION = { x: WIDTH * 0.1, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}

const scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene];
const initScenes = () => scenes.map((scene) => new scene(SHARED_CONFIG))

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  autoCenter: true,
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
    }
  },
  scene: initScenes()
}

new Phaser.Game(config);