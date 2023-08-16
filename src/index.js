import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: true,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

let bird = null;
let flapVelocity = 250;
const VELOCITY = 200;

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

function create() {
  this.add.image(0, 0, "sky").setOrigin(0, 0);
  bird = this.physics.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0);

  this.input.keyboard.on("keydown-SPACE", flap);
}

function update(time, delta) {}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

new Phaser.Game(config);
