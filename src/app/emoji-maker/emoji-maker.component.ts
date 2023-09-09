import { Component } from '@angular/core';

@Component({
  selector: 'emoji-maker',
  templateUrl: './emoji-maker.component.html',
  styleUrls: ['./emoji-maker.component.css'],
})
export class EmojiMakerComponent {
  counterEyes = 4;
  counterEyebrows = 3;
  counterMouth = 4;
  counterColor = 4;
  colors = ['#4bff81', '#4bb4ff', '#ff702e', '#b88cff', '#ffd21f'];

  eyesClick() {
    this.counterEyes = this.counterEyes < 4 ? ++this.counterEyes : 0;
  }

  mouthClick() {
    this.counterMouth = this.counterMouth < 4 ? ++this.counterMouth : 0;
  }

  eyebrowsClick() {
    this.counterEyebrows =
      this.counterEyebrows < 3 ? ++this.counterEyebrows : 0;
  }

  colorClick() {
    this.counterColor = this.counterColor < 4 ? ++this.counterColor : 0;
  }
}
