import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'addition-game',
  templateUrl: './addition-game.component.html',
  styleUrls: ['./addition-game.component.css'],
})
export class AdditionGameComponent implements OnInit {
  num1!: number;
  num2!: number;
  score: number = 0;
  userInput!: number;
  correctAnswer!: number;

  constructor() {
    this.generateNewNumbers();
  }

  private generateNewNumbers() {
    this.num1 = Math.ceil(Math.random() * 10);
    this.num2 = Math.ceil(Math.random() * 10);
    this.correctAnswer = this.num1 + this.num2;
  }

  private initialScore() {
    const storedScore = localStorage.getItem('score');
    this.score = storedScore ? JSON.parse(storedScore) : 0;
  }

  onSubmit() {
    if (this.userInput === this.correctAnswer) {
      this.userInput = null as any;
      this.score++;
      this.updateLocalStorage();
    } else {
      this.score--;
      alert('Wrong Answer! Try again');
      this.updateLocalStorage();
    }
    this.generateNewNumbers();
    this.userInput = null as any;
  }

  updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(this.score));
  }

  ngOnInit(): void {
    this.initialScore();
  }

  resetScore() {
    this.score = 0;
    localStorage.setItem('score', JSON.stringify(0));
  }
}
