import { Component } from '@angular/core';
import { EngDictionaryService } from './eng-dictionary.service';

@Component({
  selector: 'english-dictionary',
  templateUrl: './english-dictionary.component.html',
  styleUrls: ['./english-dictionary.component.css'],
})
export class EnglishDictionaryComponent {
  userInput: string = '';
  infoText: string = 'Type a word and press enter';
  showInfotext = true;
  hideResponse = true;
  wordTitle: string = '_________';
  meaning: string = '_________';

  audioSrc!: string;

  dictionaryResponse!: any;

  constructor(private engDictionaryService: EngDictionaryService) {}

  fetchWord() {
    this.engDictionaryService.getData(this.userInput).subscribe(
      (result) => {
        this.dictionaryResponse = result;

        this.wordTitle = this.dictionaryResponse[0].word;

        this.meaning =
          this.dictionaryResponse[0].meanings[0].definitions[0].definition;
        this.audioSrc = this.dictionaryResponse[0].phonetics[0].audio;
      },
      (error: Error) => {
        this.showInfotext = true;
        this.hideResponse = true;
        console.log(error);
        this.infoText = 'An error happened. Please try again';
      }
    );
  }

  searchWord(event: Event) {
    if ((event as KeyboardEvent).key === 'Enter') {
      this.fetchWord();
      this.showInfotext = false;
      this.hideResponse = false;
    }
  }
}
