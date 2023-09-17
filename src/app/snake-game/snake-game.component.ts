import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css'],
})
export class SnakeGameComponent implements AfterViewInit {
  blockSize = 25;
  rows = 20;
  cols = 20;
  @ViewChild('board') board!: ElementRef;
  context!: any;
  snakeX = this.blockSize * 5;
  snakeY = this.blockSize * 5;
  foodX!: number;
  foodY!: number;
  velocityX = 0;
  velocityY = 0;
  snakeBody: number[][] = [];
  gameOver = false;
  score = 0;

  ngAfterViewInit(): void {
    this.board.nativeElement.height = this.rows * this.blockSize;
    this.board.nativeElement.width = this.cols * this.blockSize;
    this.context = this.board.nativeElement.getContext('2d');
    this.placeFood();
    window.addEventListener('keyup', this.changeDirection.bind(this));
    setInterval(() => this.update(), 100);
  }

  update() {
    if (this.gameOver) {
      return;
    }
    this.context.fillStyle = 'black';
    this.context.fillRect(
      0,
      0,
      this.board.nativeElement.width,
      this.board.nativeElement.height
    );

    this.context.fillStyle = 'red';
    this.context.fillRect(
      this.foodX,
      this.foodY,
      this.blockSize,
      this.blockSize
    );
    if (this.snakeX == this.foodX && this.snakeY == this.foodY) {
      this.snakeBody.push([this.foodX, this.foodY]);
      this.placeFood();
      this.score += 10;
    }

    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      this.snakeBody[i] = this.snakeBody[i - 1];
    }
    if (this.snakeBody.length) {
      this.snakeBody[0] = [this.snakeX, this.snakeY];
    }
    this.context.fillStyle = 'lime';
    this.snakeX += this.velocityX * this.blockSize;
    this.snakeY += this.velocityY * this.blockSize;
    this.context.fillRect(
      this.snakeX,
      this.snakeY,
      this.blockSize,
      this.blockSize
    );
    for (let i = 0; i < this.snakeBody.length; i++) {
      this.context.fillRect(
        this.snakeBody[i][0],
        this.snakeBody[i][1],
        this.blockSize,
        this.blockSize
      );
    }

    if (
      this.snakeX < 0 ||
      this.snakeX > this.cols * this.blockSize ||
      this.snakeY < 0 ||
      this.snakeY > this.rows * this.blockSize
    ) {
      this.gameOver = true;
      alert('Game Over');
    }

    for (let i = 0; i < this.snakeBody.length; i++) {
      if (
        this.snakeX == this.snakeBody[i][0] &&
        this.snakeY == this.snakeBody[i][1]
      ) {
        this.gameOver = true;
        alert('Game Over');
      }
    }
  }

  placeFood() {
    this.foodX = Math.floor(Math.random() * this.cols) * this.blockSize;
    this.foodY = Math.floor(Math.random() * this.rows) * this.blockSize;
  }

  changeDirection(e: KeyboardEvent) {
    if (e.key == 'ArrowUp' && this.velocityY != 1) {
      this.velocityX = 0;
      this.velocityY = -1;
    } else if (e.key == 'ArrowDown' && this.velocityY != -1) {
      this.velocityX = 0;
      this.velocityY = 1;
    } else if (e.key == 'ArrowLeft' && this.velocityX != 1) {
      this.velocityX = -1;
      this.velocityY = 0;
    } else if (e.key == 'ArrowRight' && this.velocityX != -1) {
      this.velocityX = 1;
      this.velocityY = 0;
    }
  }
}
