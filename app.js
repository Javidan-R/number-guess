class NumberGuessingGame {
  constructor() {
    this.guesses = 0;
    this.random_number = this.generateRandomNumber();
    this.guessInput = document.getElementById("guessInput");
    this.result = document.getElementById("result");
    this.error = document.getElementById("error");
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 15) + 1;
  }

  checkGuess() {
    const guess = +this.guessInput.value.trim();
    if (isNaN(guess) || guess < 1 || guess > 15) {
      this.result.textContent = `Guessed numbers so far: ${this.guesses}`;
      return;
    }
    this.guesses++;
    if (guess === this.random_number) {
      this.displayResult(`Congratulations! You guessed the correct number in ${this.guesses} ${this.guesses === 1 ? 'guess' : 'guesses'}.`);
    } else if (guess < this.random_number) {
      this.displayError("Your guess is too low! Try again.");
    } else {
      this.displayError("Your guess is too high! Try again.");
    }
    this.clearInput();
  }

  displayResult(message) {
    this.result.textContent = message;
  }

  displayError(message) {
    this.error.textContent = message;
  }

  clearInput() {
    this.guessInput.value = "";
    this.guessInput.focus();
  }
}

const game = new NumberGuessingGame();
