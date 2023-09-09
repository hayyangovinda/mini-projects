import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'whac-a-mole',
  templateUrl: './whac-a-mole.component.html',
  styleUrls: ['./whac-a-mole.component.css'],
})
export class WhacAMoleComponent implements OnInit {
  pipeNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  randomPipeMole!: number;
  randomPipePlant!: number;
  gameOver = false;
  score = 0;
  loseMessage = 'Game Over';

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.randomPipePlant = this.getRandomPipe();
    this.randomPipeMole = this.getRandomPipe();

    setInterval(() => {
      this.setMole();
    }, 1000);
    setInterval(() => {
      this.setPlant();
    }, 2000);
  }

  getRandomPipe() {
    return Math.floor(Math.random() * 9);
  }

  setMole() {
    if (this.gameOver) {
      return;
    }
    this.randomPipeMole = this.getRandomPipe();
    while (this.randomPipePlant === this.randomPipeMole) {
      this.randomPipeMole = this.getRandomPipe();
    }
  }

  setPlant() {
    if (this.gameOver) {
      return;
    }
    this.randomPipePlant = this.getRandomPipe();
    while (this.randomPipePlant === this.randomPipeMole) {
      this.randomPipePlant = this.getRandomPipe();
    }
  }

  clickMole(event: Event) {
    this.score += 10;
  }

  clickPlant() {
    this.gameOver = true;
  }
}
