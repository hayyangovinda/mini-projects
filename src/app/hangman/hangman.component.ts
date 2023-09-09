import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { WordListService } from './word-list.service';

@Component({
  selector: 'hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css'],
})
export class HangmanComponent implements OnInit {
  constructor(private wordListService: WordListService) {}

  letters: string[] = [];
  wordList: { word: string; hint: string }[] = [];
  newWord!: { word: string; hint: string };
  word = '';
  hint = '';
  clickedLetter = '';
  listElement!: HTMLLIElement;
  errors = 0;
  gameOver!: boolean;
  win!: boolean;
  gameReset: boolean = true;

  correctLettersGuessed: number = 0;

  @ViewChildren('list') list!: QueryList<ElementRef<HTMLLIElement>>;
  @ViewChildren('btn') buttons!: QueryList<ElementRef<HTMLLIElement>>;

  ngOnInit(): void {
    this.generateLetters();

    this.generateNewWord();
  }

  generateNewWord() {
    this.wordList = this.wordListService.getWordList();
    this.newWord = this.getRandomWord();
    const { word, hint } = this.newWord;
    this.word = word;
    this.hint = hint;
  }

  generateLetters() {
    for (let i = 97; i <= 122; i++) {
      this.letters.push(String.fromCharCode(i));
    }
  }

  getRandomWord() {
    const index = Math.floor(Math.random() * this.wordList.length);
    return this.wordList[index];
  }

  initGame(btn: HTMLButtonElement) {
    this.clickedLetter = btn.innerText.toLowerCase();

    if (this.word.includes(this.clickedLetter)) {
      [...this.word].forEach((letter, index) => {
        if (letter == this.clickedLetter) {
          if (letter) {
            this.list.toArray()[index].nativeElement.innerText = letter;
            this.list.toArray()[index].nativeElement.classList.add('guessed');
            this.correctLettersGuessed++;
          }
        }
      });
    } else {
      this.errors++;
    }

    btn.disabled = true;

    if (this.errors === 6) {
      this.gameOver = true;
      this.win = false;
    } else if (this.correctLettersGuessed === this.word.length) {
      this.win = true;
      this.gameOver = true;
    }
  }

  resetGame() {
    this.correctLettersGuessed = 0;
    this.errors = 0;
    this.gameReset = true;
    this.gameOver = false;

    [...this.word].forEach((letter, index) => {
      if (letter) {
        this.list.toArray()[index].nativeElement.innerText = '';
        this.list.toArray()[index].nativeElement.classList.remove('guessed');
      }
    });

    this.buttons.forEach((button: ElementRef) => {
      button.nativeElement.disabled = false;
    });

    this.generateNewWord();
  }
}
