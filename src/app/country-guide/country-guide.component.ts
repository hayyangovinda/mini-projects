import { Component } from '@angular/core';
import { CountryGuideService } from './country-guide.service';

@Component({
  selector: 'country-guide',
  templateUrl: './country-guide.component.html',
  styleUrls: ['./country-guide.component.css'],
})
export class CountryGuideComponent {
  constructor(private countryGuideService: CountryGuideService) {}
  userInput: string = '';
  country!: string;
  capital!: string;
  continent!: string;
  population!: string;
  currency!: string;
  commonLanguages!: string;
  apiResponse!: any;
  imgSrc!: string;
  showResult = false;
  errorMessage: string = '';

  getCountry() {
    this.countryGuideService.fetchData(this.userInput).subscribe(
      (response) => {
        this.apiResponse = response;
        this.errorMessage = '';

        this.country = this.apiResponse[0].name.common;
        this.capital = this.apiResponse[0].capital[0];
        this.continent = this.apiResponse[0].continents[0];
        this.imgSrc = this.apiResponse[0].flags.png;
        this.population = this.apiResponse[0].population;
        this.currency = Object.keys(this.apiResponse[0].currencies)[0];

        this.commonLanguages = Object.values(this.apiResponse[0].languages)
          .toString()
          .split(',')
          .join(', ');

        this.showResult = true;
      },
      () => {
        if (this.userInput?.length === 0) {
          this.errorMessage = 'The input field cannot be empty';
        } else {
          this.errorMessage = 'Please enter a valid country name.';
        }
      }
    );
  }

  searchCountry(event: Event) {
    if ((event as KeyboardEvent).key === 'Enter') {
      this.getCountry();
    }
  }
}
