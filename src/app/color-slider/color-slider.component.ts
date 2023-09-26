import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.css'],
})
export class ColorSliderComponent implements AfterViewInit, OnInit {
  redValue = 0;
  greenValue = 0;
  blueValue = 0;
  buttonClicked = false;

  @ViewChild('body') body!: ElementRef;
  @ViewChild('colorcode') colorCode!: ElementRef;

  finalColorCode!: string;
  changeColor() {
    this.finalColorCode = ` rgb(${this.redValue},${this.greenValue},${this.blueValue})`;
    this.body.nativeElement.style.backgroundColor = this.finalColorCode;
  }

  ngOnInit(): void {
    this.finalColorCode = ` rgb(${this.redValue},${this.greenValue},${this.blueValue})`;
  }

  ngAfterViewInit(): void {
    this.changeColor();
  }

  copyColorCode() {
    this.colorCode?.nativeElement.select();
    document.execCommand('copy');
    this.buttonClicked = true;
    setTimeout(() => (this.buttonClicked = false), 1000);
  }
}
