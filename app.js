class NumberGuessingGame {
    constructor() {
      this.guesses = 0;
      this.random_number = Math.floor(Math.random() * 15) + 1;
    }
  
    checkGuess() {
      let guessInput = document.getElementById("guessInput")
      let result = document.getElementById("result");
      const error = document.getElementById("error");
      let guess = +guessInput.value.trim();
      if (isNaN(guess)  || guess < 1 || guess > 15) {
        result.textContent = `Guessed numbers are  ${this.guesses}` ;
        return;
      }
      this.guesses++;
      if (guess === this.random_number) {
        result.textContent = "Congratulations! You guessed the correct number in " + this.guesses + " guesses.";
      } else if (guess < this.random_number) {
        error.textContent = "Your guess is too low! Try again.";
      } else {
        error.textContent = "Your guess is too high! Try again.";
      }
  
      guessInput.value = "";
      guessInput.focus();
    }
  }
  
  var game = new NumberGuessingGame();
  