import { Component } from '@angular/core';

@Component({
  selector: 'rock-paper-scisscors',
  templateUrl: './rock-paper-scisscors.component.html',
  styleUrls: ['./rock-paper-scisscors.component.css'],
})
export class RockPaperScisscorsComponent {
  computerMove!: string;
  playerMove!: string;
  result!: string;

  score = { Wins: 0, Losses: 0, Ties: 0 };

  constructor() {}
  generateComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      this.computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      this.computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      this.computerMove = 'Scissors';
    }
  }

  playGame(playerMove: string) {
    this.generateComputerMove();
    this.playerMove = playerMove;
    if (playerMove === this.computerMove) {
      this.result = 'Tie!';
    }

    if (playerMove === 'Scissors' && this.computerMove === 'Rock') {
      this.result = 'You Lose!';
    } else if (playerMove === 'Scissors' && this.computerMove === 'Paper') {
      this.result = 'You Win!';
    } else if (playerMove === 'Paper' && this.computerMove === 'Scissors') {
      this.result = 'You Lose!';
    } else if (playerMove === 'Paper' && this.computerMove === 'Rock') {
      this.result = 'You Win!';
    } else if (playerMove === 'Rock' && this.computerMove === 'Paper') {
      this.result = 'You Lose!';
    } else if (playerMove === 'Rock' && this.computerMove === 'Scissors') {
      this.result = 'You Win!';
    }

    if (this.result === 'You Win!') {
      this.score.Wins++;
    } else if (this.result === 'You Lose!') {
      this.score.Losses++;
    } else if (this.result === 'Tie!') {
      this.score.Ties++;
    }
  }
}
