import { Component } from '@angular/core';
import { AiApiService } from './ai-api.service';

@Component({
  selector: 'app-ai-image-generator',
  templateUrl: './ai-image-generator.component.html',
  styleUrls: ['./ai-image-generator.component.css'],
})
export class AiImageGeneratorComponent {
  constructor(private aiApiService: AiApiService) {}

  userInput: string = '';
  quantity = 1;
  apiResponse!: any;
  generateImages() {
    this.aiApiService
      .generateAiImages(this.userInput, this.quantity)
      .subscribe((resp) => {
        this.apiResponse = resp;

        console.log(this.apiResponse);
      });
  }
}
