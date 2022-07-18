class WorldScene extends Phaser.Scene {
  constructor() {
    super({ key: "WorldScene" });
  }
  preload() {}

  create() {
    this.socket = io();

    worldScene = this;

    const self = this;
    var txt;
    this.players = this.physics.add.group();

    function addPlayer(self, playerInfo) {
      self.player = self.add.zone(0, 0, 6, 6);
      self.player.playerId = playerInfo.playerId;
      self.player.actualId = playerInfo.actualId;
      if (playerInfo.actualId == 1) {
        self.player.playing = true;
        txt = worldScene.add.text(100, 100, "É a tua vez!", {
          fontFamily: "Arial",
          fontSize: 32,
          color: "#00ff00",
        });
      } else if (playerInfo.actualId == 2) {
        self.player.playing = false;
        txt = worldScene.add.text(100, 100, "Espera pelo outro jogador!", {
          fontFamily: "Arial",
          fontSize: 32,
          color: "#00ff00",
        });
      }
    }

    function removePlayer(self, playerId) {
      self.players.getChildren().forEach((player) => {
        if (playerId === player.playerId) {
          player.destroy();
        }
      });
    }

    this.socket.on("currentPlayers", function (players) {
      Object.keys(players).forEach(function (id) {
        if (players[id].playerId === self.socket.id) {
          //displayPlayers(self, players[id], 'ship');
          // add player to server
          addPlayer(self, players[id]);
          //console.log(players[id]);
        }
      });
    });

    this.socket.on("disconnected", function () {
      console.log("user disconnected");
      // remove player from server
      removePlayer(self, socket.id);
      // remove this player from our players object
      delete players[socket.id];
    });

    this.board = this.add
      .image(gameConfig.width / 2, gameConfig.height / 2, "board")
      .setScale(0.1);

    this.column01 = this.add
      .rectangle(
        gameConfig.width / 2 - 270,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column02 = this.add
      .rectangle(
        gameConfig.width / 2 - 180,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column03 = this.add
      .rectangle(
        gameConfig.width / 2 - 90,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column04 = this.add
      .rectangle(
        gameConfig.width / 2,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column05 = this.add
      .rectangle(
        gameConfig.width / 2 + 90,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column06 = this.add
      .rectangle(
        gameConfig.width / 2 + 180,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column07 = this.add
      .rectangle(
        gameConfig.width / 2 + 270,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();

    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 6; j++) {
        this.spot = this.add.circle(
          gameConfig.width / 2 - 270 + i * 90,
          gameConfig.height / 2 - 220 + j * 90,
          40,
          0xffffff,
          1
        );
      }
    }

    this.column01.on(
      "pointerdown",
      function (pointer) {
        if (self.player.playing) {
          if (column01Spots <= 5) {
            console.log("Column 1 clicked");
            column01Spots++;
            console.log("Column 1 spots:" + column01Spots);
            this.checkSpot(column01Spots, 0, this.player.actualId);

            /*
          this.socket.emit("receiveBoard", {
            tableSpots
          });
          */
            console.log("hey" + this.player.actualId);
          } else {
            column01Spots = 6;
          }
        }
      },
      this
    );

    this.column02.on(
      "pointerdown",
      function (pointer) {
        if (self.player.playing) {
          if (column02Spots <= 5) {
            console.log("Column 2 clicked");
            column02Spots++;
            console.log("Column 2 spots:" + column02Spots);
            this.checkSpot(column02Spots, 1, this.player.actualId);

            /*
          this.socket.emit("receiveBoard", {
            tableSpots
          });
          */

            console.log(this.player.actualId);
          } else {
            column02Spots = 6;
          }
        }
      },
      this
    );

    this.column03.on(
      "pointerdown",
      function (pointer) {
        if (self.player.playing) {
          if (column03Spots <= 5) {
            console.log("Column 3 clicked");
            column03Spots++;
            console.log("Column 3 spots:" + column03Spots);
            this.checkSpot(column03Spots, 2, this.player.actualId);

            /*
          this.socket.emit("receiveBoard", {
            tableSpots
          });
          */

            console.log(this.player.actualId);
          } else {
            column03Spots = 6;
          }
        }
      },
      this
    );

    this.column04.on(
      "pointerdown",
      function (pointer) {
        if (self.player.playing) {
          if (column04Spots <= 5) {
            console.log("Column 4 clicked");
            column04Spots++;
            console.log("Column 4 spots:" + column04Spots);
            this.checkSpot(column04Spots, 3, this.player.actualId);

            /*
          this.socket.emit("receiveBoard", {
            tableSpots
          });
          */

            console.log(this.player.actualId);
          } else {
            column04Spots = 6;
          }
        }
      },
      this
    );

    this.column05.on(
      "pointerdown",
      function (pointer) {
        if (self.player.playing) {
          if (column05Spots <= 5) {
            console.log("Column 5 clicked");
            column05Spots++;
            console.log("Column 5 spots:" + column05Spots);
            this.checkSpot(column05Spots, 4, this.player.actualId);

            /*
          this.socket.emit("receiveBoard", {
            tableSpots
          });
          */

            console.log(this.player.actualId);
          } else {
            column05Spots = 6;
          }
        }
      },
      this
    );

    this.column06.on(
      "pointerdown",
      function (pointer) {
        if (self.player.playing) {
          if (column06Spots <= 5) {
            console.log("Column 6 clicked");
            column06Spots++;
            console.log("Column 6 spots:" + column06Spots);
            this.checkSpot(column06Spots, 5, this.player.actualId);

            /*
          this.socket.emit("receiveBoard", {
            tableSpots
          });
          */

            console.log(this.player.actualId);
          } else {
            column06Spots = 6;
          }
        }
      },
      this
    );

    this.column07.on(
      "pointerdown",
      function (pointer) {
        if (self.player.playing) {
          if (column07Spots <= 5) {
            console.log("Column 7 clicked");
            column07Spots++;
            console.log("Column 7 spots:" + column07Spots);
            this.checkSpot(column07Spots, 6, this.player.actualId);

            //envia o tabuleiro para o servidor
            /*
          this.socket.emit("receiveBoard", {
            tableSpots
          });
          */
            console.log(this.player.actualId);
          } else {
            column07Spots = 6;
          }
        }
      },
      this
    );

    this.socket.on(
      "sendUpdatedBoard",
      function (column, columnSpot, myId, playing) {
        var currentColor;

        if (playing) {
          self.player.playing = !self.player.playing;
        } else {
          self.player.playing = !self.player.playing;
        }

        if (self.player.playing) {
          txt.setText("É a tua vez!");
        } else {
          txt.setText("Espera pelo outro jogador!");
        }

        switch (column) {
          case 0:
            column01Spots = columnSpot;
            break;
          case 1:
            column02Spots = columnSpot;
            break;
          case 2:
            column03Spots = columnSpot;
            break;
          case 3:
            column04Spots = columnSpot;
            break;
          case 4:
            column05Spots = columnSpot;
            break;
          case 5:
            column06Spots = columnSpot;
            break;
          case 6:
            column07Spots = columnSpot;
            break;
        }

        if (myId == 1) {
          currentColor = Phaser.Display.Color.GetColor(255, 0, 0);
        } else if (myId == 2) {
          currentColor = Phaser.Display.Color.GetColor(255, 255, 0);
        }
        worldScene.spot = worldScene.add.circle(
          gameConfig.width / 2 - 270 + column * 90,
          gameConfig.height / 2 + 320 - columnSpot * 90,
          40,
          currentColor,
          1
        );

        if (myId == 1) {
          tableSpots[columnSpot - 1][column] = 1;
        } else if (myId == 2) {
          tableSpots[columnSpot - 1][column] = 2;
        }
      }
    );
  }

  // -- UPDATE  ------------------------------------------------------------------------------------
  update() {
    if (
      column01Spots == 6 &&
      column02Spots == 6 &&
      column03Spots == 6 &&
      column04Spots == 6 &&
      column05Spots == 6 &&
      column06Spots == 6 &&
      column07Spots == 6
    ) {
      console.log("Draw");
      this.scene.start("GameOverScene");
    }

    // verifica horizontalmente
    for (var c = 0; c < 4; c++) {
      for (var r = 0; r < 6; r++) {
        if (
          tableSpots[r][c] == tableSpots[r][c + 1] &&
          tableSpots[r][c] == tableSpots[r][c + 2] &&
          tableSpots[r][c] == tableSpots[r][c + 3] &&
          tableSpots[r][c] != 0
        ) {
          console.log(
            "Player ganhou" +
              tableSpots[r][c + 1] +
              tableSpots[r][c + 2] +
              tableSpots[r][c + 3]
          );
        }
      }
    }

    // verifica verticalmente
    for (var c = 0; c < 7; c++) {
      for (var r = 0; r < 3; r++) {
        if (
          tableSpots[r][c] == tableSpots[r + 1][c] &&
          tableSpots[r][c] == tableSpots[r + 2][c] &&
          tableSpots[r][c] == tableSpots[r + 3][c] &&
          tableSpots[r][c] != 0
        ) {
          console.log(
            "Player ganhou" +
              tableSpots[r][c] +
              tableSpots[r + 1][c] +
              tableSpots[r + 2][c]
          );
        }
      }
    }

    // verifica diagonal direita pra cima
    for (var c = 0; c < 4; c++) {
      for (var r = 0; r < 3; r++) {
        if (
          tableSpots[r][c] == tableSpots[r + 1][c + 1] &&
          tableSpots[r][c] == tableSpots[r + 2][c + 2] &&
          tableSpots[r][c] == tableSpots[r + 3][c + 3] &&
          tableSpots[r][c] != 0
        ) {
          console.log("Player ganhou" + tableSpots[r][c]);
        }
      }
    }

    // verifica diagonal direita pra baixo
    for (var c = 0; c < 4; c++) {
      for (var r = 3; r < 6; r++) {
        if (
          tableSpots[r][c] == tableSpots[r - 1][c + 1] &&
          tableSpots[r][c] == tableSpots[r - 2][c + 2] &&
          tableSpots[r][c] == tableSpots[r - 3][c + 3] &&
          tableSpots[r][c] != 0
        ) {
          console.log("Player ganhou" + tableSpots[r][c]);
        }
      }
    }
  }

  checkSpot(columnSpot, column, myId) {
    /*
    var redPlayer = Phaser.Display.Color.GetColor(255, 0, 0);
    var yellowPlayer = Phaser.Display.Color.GetColor(255, 255, 0);
    var currentColor;
    //if (player % 2 == 0) {
    if(myId == 1){
      console.log(myId);
      currentColor = redPlayer;
    } else if(myId == 2){
      console.log(myId);
      currentColor = yellowPlayer;
    }
    if (columnSpot > 6) {
      console.log("Column Full");
    } else {
      this.spot = this.add.circle(
        gameConfig.width / 2 - 270 + column * 90,
        gameConfig.height / 2 + 320 - columnSpot * 90,
        40,
        currentColor,
        1
      );
      //if (player % 2 == 0) {
      if(myId == 1){
        tableSpots[columnSpot - 1][column] = 1;
      } else if(myId == 2){
        tableSpots[columnSpot - 1][column] = 2;
      }
      console.log(tableSpots);
      //player++;
    }
    */

    console.log(tableSpots);

    this.socket.emit("checkSpots", {
      columnSpot,
      column,
      myId,
    });
  }
}

// -- dá resize à área de f conforme o monitor
function resize() {
  let canvas = document.querySelector("canvas");
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let windowRatio = windowWidth / windowHeight;
  let gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}
