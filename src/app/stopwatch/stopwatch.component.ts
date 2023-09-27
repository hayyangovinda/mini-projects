import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;

  interval: any = null;

  start() {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => this.stopWatch(), 10);
  }

  stopWatch() {
    this.millisecond += 10;
    this.second =
      this.millisecond >= 1000 ? (this.second + 1) % 60 : this.second;
    this.minute =
      this.second === 0 && this.millisecond >= 1000
        ? (this.minute + 1) % 60
        : this.minute;

    if (this.minute === 59 && this.second === 59 && this.millisecond === 990) {
      this.hour++;
    }

    this.millisecond = this.millisecond >= 1000 ? 0 : this.millisecond;
  }

  pause() {
    clearInterval(this.interval);
  }

  reset() {
    clearInterval(this.interval);
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
  }
}
