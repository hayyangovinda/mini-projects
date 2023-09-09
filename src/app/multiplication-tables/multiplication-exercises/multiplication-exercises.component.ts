import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'multiplication-exercises',
  templateUrl: './multiplication-exercises.component.html',
  styleUrls: ['./multiplication-exercises.component.css'],
})
export class MultiplicationExercisesComponent implements OnInit {
  // num1!: number;
  num2!: number;
  score: number = 0;
  userInput!: number;
  correctAnswer!: number;
  tableNo!: number;

  constructor(private route: ActivatedRoute) {}

  private generateNewNumbers() {
    this.num2 = Math.ceil(Math.random() * 12);
    this.correctAnswer = this.tableNo * this.num2;
  }

  private initialScore() {
    const storedScore = localStorage.getItem('scoreMultiplication');
    this.score = storedScore ? JSON.parse(storedScore) : 0;
  }

  onSubmit() {
    if (this.userInput === this.correctAnswer) {
      this.userInput = null as any;
      this.score++;
      this.updateLocalStorage();
      this.generateNewNumbers();
    } else {
      this.score--;
      alert('Wrong Answer! Try again');
      // this.updateLocalStorage();
    }
    this.userInput = null as any;
  }

  updateLocalStorage() {
    localStorage.setItem('scoreMultiplication', JSON.stringify(this.score));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const tableId = params['table-no'];
      this.tableNo = Number(tableId) + 1;
    });
    this.generateNewNumbers();
    this.initialScore();
  }

  resetScore() {
    this.score = 0;
    localStorage.setItem('scoreMultiplication', JSON.stringify(0));
  }
}
