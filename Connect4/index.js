const players = {};

var serverBoard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

var playerCount = 0;

const express = require("express");
const app = express();
const server = require("http").Server(app);

const io = require("socket.io")(server);

var playing = false;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  //emits(enviar info) e ons(receber info)

  console.log("a user connected");

  switch (playerCount) {
    case 0:
      actualId = 0;
      break;

    case 1:
      actualId = 1;
      break;

    case 2:
      actualId = 2;
      break;

    default:
      break;
  }

  // create a new player and add it to our players object
  players[socket.id] = {
    playerId: socket.id,
    actualId: actualId,
  };
  playerCount++;

  // send the players object to the new player
  socket.emit("currentPlayers", players);
  // update all other players of the new player
  socket.broadcast.emit("newPlayer", players[socket.id]);

  socket.on("disconnect", function () {
    console.log("user disconnected");
    // remove this player from our players object
    delete players[socket.id];
    // emit a message to all players to remove this player
    playerCount--;
    io.emit("disconnected", socket.id);
  });

  /*
  //recebe o tabuleiro do jogador
  socket.on('receiveBoard', function(data){
    console.log(data.arrayToSend);
  });
  */

  //recebe o tabuleiro do jogador
  socket.on("checkSpots", function (data) {
    checkSpot(data.columnSpot, data.column, data.myId);
  });

  function checkSpot(columnSpot, column, myId) {
    if (columnSpot > 6) {
      console.log("Column Full");
    } else {
      if (myId == 1) {
        serverBoard[columnSpot - 1][column] = 1;
      } else if (myId == 2) {
        serverBoard[columnSpot - 1][column] = 2;
      }

      socket.emit("sendUpdatedBoard", column, columnSpot, myId, playing);
      playing = !playing;
      socket.broadcast.emit("sendUpdatedBoard", column, columnSpot, myId);
      console.log(serverBoard);
    }
  }

  /*
  //envia informação aos jogadores
  socket.emit('updateBoard', )
  */
});

server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});
