import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css'],
})
export class MemoryGameComponent implements OnInit {
  errors = 0;
  cardList = [
    'darkness',
    'double',
    'fairy',
    'fighting',
    'fire',
    'grass',
    'lightning',
    'metal',
    'psychic',
    'water',
  ];
  card1Selected: HTMLImageElement | null = null;
  card2Selected: HTMLImageElement | null = null;
  board: string[][] = [];
  cardSet!: string[];
  rows = 4;
  columns = 5;
  checkCard = true;
  @ViewChild('cardimage') cardImage!: ElementRef;
  clickedCard = false;
  correctAnswer = false;

  constructor() {}
  ngOnInit(): void {
    this.shuffleCards();
    this.startGame();
  }

  shuffleCards() {
    this.cardSet = this.cardList.concat(this.cardList);
    for (let i = 0; i < this.cardSet.length; i++) {
      let j = Math.floor(Math.random() * this.cardSet.length);

      let temp = this.cardSet[i];
      this.cardSet[i] = this.cardSet[j];
      this.cardSet[j] = temp;
    }
    console.log(this.cardSet);
  }

  hideCards() {
    setTimeout(() => {
      this.checkCard = false;
    }, 1000);
  }

  startGame() {
    let cardSetCopy = this.cardSet.slice();
    for (let r = 0; r < this.rows; r++) {
      let row = [] as string[];
      for (let c = 0; c < this.columns; c++) {
        let cardImg: string | undefined = cardSetCopy.pop();
        if (cardImg) {
          row.push(cardImg);
        }
      }

      this.board.push(row);
    }
    console.log(this.board);
    this.hideCards();
  }

  selectCard(cardimage: HTMLImageElement, index: number) {
    this.clickedCard = true;
    cardimage.src = `../../assets/memory-game-img/${
      this.clickedCard ? this.cardSet[index] : 'back'
    }.jpg`;

    if (this.card1Selected === null) {
      this.card1Selected = cardimage;
    } else if (this.card2Selected === null) {
      this.card2Selected = cardimage;
    }

    if (this.card1Selected !== null && this.card2Selected !== null) {
      if (this.card1Selected.src !== this.card2Selected.src) {
        setTimeout(() => {
          if (!this.card1Selected || !this.card2Selected) return;
          this.card1Selected.src = `../../assets/memory-game-img/back.jpg`;
          this.card2Selected.src = `../../assets/memory-game-img/back.jpg`;
          this.card2Selected = null;
          this.card1Selected = null;
          this.errors++;
        }, 1_000);
      } else if (this.card1Selected.src === this.card2Selected.src) {
        this.card1Selected.classList.add('disabled');
        this.card2Selected.classList.add('disabled');
        this.card2Selected = null;
        this.card1Selected = null;
      }
    }
  }
}

// update(card1: string, card2: string) {
//   if (card1 != card2) {
//     this.clickedCard = false;
//     // card1 = `../../assets/memory-game-img/back.jpg`;
//     // card2 = `../../assets/memory-game-img/back.jpg`;
//   }
// }
