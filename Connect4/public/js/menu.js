class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" });
  }

  preload() {}

  create() {
    // -- adiciona a imagem de fundo
    //this.background = this.add.image(gameConfig.width / 2, gameConfig.height / 2, 'backgroundImage').setScale(1.2);

    // -- adiciona a imagem que contém o título
    //this.gameLogo = this.add.image(gameConfig.width / 2, gameConfig.height / 2 - 150, 'gameTitle').setScale(0.5);
    this.titleText = this.add.text(
      gameConfig.width / 2 - 150,
      gameConfig.height / 2 - 300,
      "Rose Connect",
      {
        font: "50px Arial",
        fill: "#ffff44",
        align: "center",
      }
    );

    // -- adiciona os botões que reencaminham para as intruções e para jogar o jogo
    this.button1 = this.add
      .image(
        gameConfig.width / 2 + 150,
        gameConfig.height / 2 + 50,
        "instructionsButton"
      )
      .setScale(0.5)
      .setInteractive({ useHandCursor: true });
    this.button2 = this.add
      .image(
        gameConfig.width / 2 - 150,
        gameConfig.height / 2 + 50,
        "playButton"
      )
      .setScale(0.5)
      .setInteractive({ useHandCursor: true });

    // -- ao clickar no botão reencaminha para a instructions scene
    this.button1.once(
      "pointerdown",
      function (pointer) {
        this.scene.start("InstructionsScene");
      },
      this
    );

    // -- ao clickar no botão reencaminha para a world scene
    this.button2.once(
      "pointerdown",
      function (pointer) {
        this.scene.start("WorldScene");
      },
      this
    );
  }
}
