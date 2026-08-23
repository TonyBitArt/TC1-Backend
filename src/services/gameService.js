const gameService = {
  selectStartingPlayer: (playerOne, playerTwo) => {
    const isPlayerOneFirst = Math.random() < 0.5;

    return {
      firstPlayer: isPlayerOneFirst ? playerOne : playerTwo,
      secondPlayer: isPlayerOneFirst ? playerTwo : playerOne,
    };
  },
};

module.exports = gameService;
