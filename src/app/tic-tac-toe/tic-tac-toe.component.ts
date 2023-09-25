import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  playerX = false;
  playerO: boolean = true;
  selectedPlayer!: string;
  playerSign!: string;
  runBot = true;
  showResult = false;

  winText!: string;
  showBoard = false;
  @ViewChildren('cell') cellElements!: QueryList<ElementRef>;
  @ViewChild('playboard') playBoard!: ElementRef;

  constructor(private router: Router) {}

  selectPlayer(player: string) {
    this.showBoard = true;
    this.selectedPlayer = player;
    this.playerSign = `<img src="../../assets/tictactoe/${this.selectedPlayer}.svg" alt="X" />`;
  }

  selectCell(cell: HTMLSpanElement, row: number, col: number) {
    cell.innerHTML = this.playerSign;

    cell.id = this.selectedPlayer;
    cell.style.pointerEvents = 'none';
    this.playBoard.nativeElement.style.pointerEvents = 'none';

    this.selectWinner();
    let randomTimeDelay: number = Math.random() * 1000 + 200;
    setTimeout(() => {
      this.bot();
    }, randomTimeDelay);
  }

  bot() {
    let freeCells = [];
    if (this.runBot) {
      this.selectedPlayer === 'O'
        ? (this.selectedPlayer = 'X')
        : (this.selectedPlayer = 'O');
      this.playerSign = `<img src="../../assets/tictactoe/${this.selectedPlayer}.svg" alt="X" />`;
      let cellContent = this.cellElements.toArray();
      for (let i = 0; i < this.cellElements.length; i++) {
        if (cellContent[i].nativeElement.childElementCount === 0) {
          freeCells.push(i);
        }
      }

      let randomCell = freeCells[Math.floor(Math.random() * freeCells.length)];

      if (freeCells.length > 0) {
        let botCell = cellContent[randomCell].nativeElement;
        botCell.innerHTML = this.playerSign;
        botCell.id = this.selectedPlayer;

        botCell.style.pointerEvents = 'none';
        this.playBoard.nativeElement.style.pointerEvents = 'auto';
      }
    }
    this.selectWinner();
    this.selectedPlayer === 'O'
      ? (this.selectedPlayer = 'X')
      : (this.selectedPlayer = 'O');
    this.playerSign = `<img src="../../assets/tictactoe/${this.selectedPlayer}.svg" alt="X" />`;
  }

  getIdVal(classNumber: number) {
    const matchingElement = this.cellElements.find((elem) =>
      elem.nativeElement.classList.contains('box' + classNumber)
    );
    return matchingElement?.nativeElement.id;
  }

  checkIdSign(cell1: number, cell2: number, cell3: number, sign: string) {
    if (
      this.getIdVal(cell1) == sign &&
      this.getIdVal(cell2) == sign &&
      this.getIdVal(cell3) == sign
    ) {
      return true;
    }
    return false;
  }

  selectWinner() {
    if (
      this.checkIdSign(1, 2, 3, this.selectedPlayer) ||
      this.checkIdSign(4, 5, 6, this.selectedPlayer) ||
      this.checkIdSign(7, 8, 9, this.selectedPlayer) ||
      this.checkIdSign(1, 4, 7, this.selectedPlayer) ||
      this.checkIdSign(2, 5, 8, this.selectedPlayer) ||
      this.checkIdSign(3, 6, 9, this.selectedPlayer) ||
      this.checkIdSign(1, 5, 9, this.selectedPlayer) ||
      this.checkIdSign(3, 5, 7, this.selectedPlayer)
    ) {
      this.gameOver();
      this.winText = `Player ${this.selectedPlayer} won the game`;
    }

    if (
      this.getIdVal(1) != '' &&
      this.getIdVal(2) != '' &&
      this.getIdVal(3) != '' &&
      this.getIdVal(4) != '' &&
      this.getIdVal(5) != '' &&
      this.getIdVal(6) != '' &&
      this.getIdVal(7) != '' &&
      this.getIdVal(8) != '' &&
      this.getIdVal(9) != ''
    ) {
      this.gameOver();
      this.winText = 'Match has been drawn';
    }
  }

  gameOver() {
    setTimeout(() => {
      this.runBot = false;
      this.showBoard = false;
      this.showResult = true;
    }, 700);
  }

  reload() {
    console.log('clicked');
    window.location.reload();
  }
}
