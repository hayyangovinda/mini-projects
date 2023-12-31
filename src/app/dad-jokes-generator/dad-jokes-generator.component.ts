import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
} from '@angular/core';
import { DadJokesService } from './dad-jokes.service';

@Component({
  selector: 'dad-jokes-generator',
  templateUrl: './dad-jokes-generator.component.html',
  styleUrls: ['./dad-jokes-generator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DadJokesGeneratorComponent {
  constructor(
    private dadJokesService: DadJokesService,
    private ref: ChangeDetectorRef
  ) {}
  jokeText: string = '';
  buttonText: string = 'Tell me a joke';
  jokeResponse!: any;
  disableButton = false;

  getJoke() {
    this.jokeText = 'Updating...';
    this.buttonText = 'Loading..';
    this.disableButton = true;
    this.dadJokesService.getData().subscribe(
      (result) => {
        this.jokeResponse = result;
        this.jokeText = this.jokeResponse[0].joke;
        this.disableButton = false;
        this.buttonText = 'Tell me a joke';
        this.ref.detectChanges();
      },
      () => {
        this.jokeText = 'An error happened.Please try again';
        this.disableButton = false;
        this.buttonText = 'Tell me a joke';
        console.log('an Error happened');
      }
    );
  }
}
