// Imports para la configuracion
const express = require("express");
const router = express.Router();

// seccion de controladores
const gameController = require("../controllers/gameController");

// Definicion de rutas y vinculacion con los controladores
router.post("/start", gameController.startNewGame);

module.exports = router;
