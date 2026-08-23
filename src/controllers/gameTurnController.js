const validationService = require("../services/validationService");
const hintService = require("../services/hintService");

const gameTurnController = {
  processTurn: (request, response) => {
    const { secretWord, guessWord } = request.body;

    if (!validationService.isValidLength(guessWord)) {
      return response.status(400).json({
        error: "El largo de la palabra es invalido (4 - 8 caracteres)",
      });
    }

    if (secretWord.toLowerCase() === guessWord.toLowerCase()) {
      return response.json({
        isWinner: true,
        message: "Encontraste la palabra",
      });
    }

    const hintsList = hintService.getHintPositions(secretWord, guessWord);

    return response.json({
      isWinner: false,
      hints: hintsList,
      message: "Palabra incorrecta",
    });
  },
};

module.exports = gameTurnController;
