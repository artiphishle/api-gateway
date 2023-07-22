/**
 * This is just a P.O.C. server
 */
const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Welcome to the Chess-API!");
});

app.get("/game", (_req, res) => {
  res.json({
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w kqKQ - 0 0",
    white: "player 1",
    black: "player 2",
    date: new Date(),
    event: "P.O.C. Event #1",
    site: "grossmeister.ch",
    result: "*",
  });
});

app.listen(3001, () => console.log("P.O.C. 'chess api' server is online"));
