import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alarm-clock',
  templateUrl: './alarm-clock.component.html',
  styleUrls: ['./alarm-clock.component.css'],
})
export class AlarmClockComponent implements OnInit {
  hoursArray: number[] = [];
  minutesArray: number[] = [];
  amPmArray = ['AM', 'PM'];
  date!: Date;
  hour!: number;
  minute!: number;
  second!: number;
  alarmTime!: string;
  alarmSet = false;
  ringtone = new Audio('../../assets/alarm-clock/ringtone.mp3');
  amPm!: string;

  getTime() {
    this.date = new Date();

    this.hour = this.date.getHours();

    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    if (this.hour >= 12) {
      this.hour = this.hour - 12;
      this.amPm = 'PM';
    } else {
      this.amPm = 'AM';
    }

    if (this.alarmTime === `${this.hour}:${this.minute} ${this.amPm}`) {
      this.ringtone.play();
      this.ringtone.loop = true;
    }
  }

  ngOnInit(): void {
    setInterval(() => this.getTime(), 1000);
    this.hours();
    this.minutes();
  }

  hours() {
    for (let i = 1; i < 13; i++) {
      this.hoursArray = [...this.hoursArray, i];
    }
  }

  minutes() {
    for (let i = 0; i < 60; i++) {
      this.minutesArray = [...this.minutesArray, i];
    }
  }

  setAlarm(hour: number, minute: number, amPm: string) {
    if (this.alarmSet) {
      this.alarmTime = '';
      this.ringtone.pause();
      return (this.alarmSet = false);
    }
    if (isNaN(hour) || isNaN(minute) || amPm === 'AM/PM') {
      return alert('Please, select a valid time to set Alarm');
    }

    this.alarmTime = `${hour}:${minute} ${amPm}`;
    this.alarmSet = true;
    console.log(this.alarmTime);
  }
}
