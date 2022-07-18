// -- objeto que contém as configurações do jogo
var gameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "phaser-example",
    //autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  width: 1280,
  height: 1000,
  backgroundColor: 0x6120c9,

  // -- definições para as físicas do jogo e para as cenas do jogo
  physics: {
    default: "arcade",
    debug: true,
  },

  scene: [BootScene, MenuScene, InstructionsScene, WorldScene, GameOverScene],
};

var game = new Phaser.Game(gameConfig);
var player = 0;

var worldScene;

var tableSpots = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
var column01Spots = 0,
  column02Spots = 0,
  column03Spots = 0,
  column04Spots = 0,
  column05Spots = 0,
  column06Spots = 0,
  column07Spots = 0;
window.focus();
resize();
window.addEventListener("resize", resize, false);
