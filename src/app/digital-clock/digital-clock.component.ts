import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitalClockComponent implements OnInit, OnDestroy {
  hour: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  ampm: string = 'AM';
  timeout: any;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.timeNow();
    this.timeout = setInterval(() => {
      this.timeNow();
    }, 1_000);
  }

  timeNow() {
    this.hour = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();

    if (this.hour > 12) {
      this.ampm = 'PM';
    }

    this.ref.markForCheck();
  }

  ngOnDestroy(): void {
    clearInterval(this.timeout);
  }
}
