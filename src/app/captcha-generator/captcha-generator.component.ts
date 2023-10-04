import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'captcha-generator',
  templateUrl: './captcha-generator.component.html',
  styleUrls: ['./captcha-generator.component.css'],
})
export class CaptchaGeneratorComponent implements OnInit {
  newCaptcha: string = '';
  userInput: string = '';
  showModal = false;

  getRandomChar() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const randomIndex = Math.floor(Math.random() * characters.length);

    return characters[randomIndex];
  }

  getNewCaptcha() {
    let newChar: string;
    let newCaptcha: string = '';
    for (let i = 0; i < 7; i++) {
      newChar = this.getRandomChar();
      newCaptcha += newChar;
    }
    this.newCaptcha = newCaptcha;
  }

  ngOnInit(): void {
    this.getNewCaptcha();
  }

  refresh() {
    this.getNewCaptcha();
  }

  submit() {
    console.log('clicke');
    if (this.userInput === this.newCaptcha) {
      setTimeout(() => (this.showModal = true), 500);
      return;
    }
    alert('The Captcha you inserted in incorrect.');
  }

  closeModal() {
    this.showModal = false;
    this.userInput = '';
    this.getNewCaptcha();
  }
}
