import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
})
export class AnalogClockComponent implements OnInit {
  isDark = false;

  date!: Date;
  secToDeg!: number;
  minToDeg!: number;
  hrToDeg!: number;

  ngOnInit(): void {
    setInterval(() => this.updateTime(), 1000);
  }

  darkClick() {
    this.isDark = !this.isDark;
  }

  updateTime() {
    this.date = new Date();
    this.secToDeg = (this.date.getSeconds() / 60) * 360;
    this.minToDeg = (this.date.getMinutes() / 60) * 360;
    this.hrToDeg = (this.date.getHours() / 12) * 360;
  }
}
