// Imports
const gameService = require("../services/gameService");

const gameController = {
  startNewGame: (request, response) => {
    const { playerOne, playerTwo } = request.body;

    if (!playerOne || !playerTwo) {
      return response
        .status(400)
        .json({ error: "Se requieren los nombres de ambos jugadores." });
    }

    const result = gameService.selectStartingPlayer(playerOne, playerTwo);
    return response.json({
      ...result,
      message: "Partida inicializada correctamente.",
    });
  },
};

module.exports = gameController;
