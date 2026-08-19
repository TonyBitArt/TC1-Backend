const validationService = {
  isValidLength: (word) => {
    if (!word) return false;

    if (word.length < 4 || word.length > 8) return false;

    return true;
  },

  isOnlyLetters: (word) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(word);
  },
};

module.exports = validationService;
