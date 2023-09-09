import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guess-the-number',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css'],
})
export class GuessTheNumberComponent implements OnInit {
  guesses = 0;
  userInput!: number | null;
  randomNumber!: number;
  guessedNums: number[] = [];

  tooHigh = false;
  tooLow = false;
  correctAnswer = false;

  ngOnInit(): void {
    this.generateNewRandomNumber();
  }

  generateNewRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  submitAnswer() {
    if (
      this.userInput === null ||
      this.userInput < 1 ||
      this.userInput > 100 ||
      isNaN(this.userInput)
    ) {
      alert('Please enter a valid number between 1 and 100');
      return;
    }

    this.guessedNums = [...this.guessedNums, this.userInput];

    console.log(this.randomNumber);
    this.guesses++;
    if (this.userInput > this.randomNumber) {
      this.tooHigh = true;
      setTimeout(() => {
        this.tooHigh = false;
      }, 2000);
    }
    if (this.userInput < this.randomNumber) {
      this.tooLow = true;
      setTimeout(() => {
        this.tooLow = false;
      }, 2000);
    }
    if (this.userInput === this.randomNumber) {
      this.correctAnswer = true;
    }
    this.userInput = null;
  }

  restartGame() {
    this.correctAnswer = false;
    this.guesses = 0;
    this.guessedNums = [];
    this.userInput = null;
    this.generateNewRandomNumber();
  }

  onEnter(event: Event) {
    if ((event as KeyboardEvent).key === 'Enter') {
      this.submitAnswer();
    }
  }
}
