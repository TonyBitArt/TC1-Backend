const hintService = {
  getHintPositions: (secretWord, guessWord) => {
    let hints = [];
    secretWord = secretWord.toLowerCase();
    guessWord = guessWord.toLowerCase();

    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === guessWord[i]) {
        hints.push(`El caracter en la posicion ${i + 1}° es correcto`);
      }
    }

    return hints;
  },
};

module.exports = hintService;
