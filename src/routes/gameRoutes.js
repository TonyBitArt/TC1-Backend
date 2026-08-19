// Imports para la configuracion
const express = require("express");
const router = express.Router();

// seccion de controladores
const gameController = require("../controllers/gameController");
const gameTurnController = require("../controllers/gameTurnController");

// Definicion de rutas y vinculacion con los controladores
router.post("/start", gameController.startNewGame);
router.post("/turn", gameTurnController.processTurn);

module.exports = router;
