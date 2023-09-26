import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  buttons = [
    '/',
    '*',
    '7',
    '8',
    '9',
    '-',
    '6',
    '5',
    '4',
    '+',
    '1',
    '2',
    '3',
    '=',
    '0',
    '.',
  ];

  displayValue = '';

  buttonClick(button: HTMLInputElement) {
    // let inputValue = this.displayValue;
    if (button.id === 'equal') {
      this.displayValue = eval(this.displayValue);
      // this.displayValue = solution;
      return;
    }
    this.displayValue += button.value;
  }

  clear() {
    this.displayValue = '';
  }

  erase() {
    this.displayValue = this.displayValue.slice(0, -1);
  }
}
