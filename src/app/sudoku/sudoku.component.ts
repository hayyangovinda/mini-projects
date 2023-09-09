import { Component } from '@angular/core';

@Component({
  selector: 'sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
})
export class SudokuComponent {
  errors = 0;
  digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  selectedDigit!: HTMLDivElement | null;
  selectedTile!: HTMLDivElement | null;
  wrongAnswer = 'X';

  board = [
    '--74916-5',
    '2---6-3-9',
    '-----7-1-',
    '-586----4',
    '--3----9-',
    '--62--187',
    '9-4-7---2',
    '67-83----',
    '81--45---',
  ];

  solution = [
    '387491625',
    '241568379',
    '569327418',
    '758619234',
    '123784596',
    '496253187',
    '934176852',
    '675832941',
    '812945763',
  ];

  selectDigit(digit: HTMLDivElement | null) {
    if (this.selectedDigit != null) {
      this.selectedDigit.classList.remove('number-selected');
    }
    this.selectedDigit = digit;

    this.selectedDigit?.classList.add('number-selected');
  }

  selectTile(tile: HTMLDivElement, row: number, column: number) {
    if (this.selectedDigit != null) {
      if (tile.innerText === '') {
        if (this.solution[row][column] != this.selectedDigit.innerText) {
          this.errors++;
          return;
        }
        tile.innerText = this.selectedDigit.innerText;
      }
    }
  }
}
