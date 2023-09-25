import { Component, OnInit } from '@angular/core';
import { CountryListService } from './country-list.service';
import { CurrencyApiService } from './currency-api.service';

@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  constructor(
    private countryListService: CountryListService,
    private currencyApi: CurrencyApiService
  ) {}

  countryList!: string[];
  imgSrc1: string = 'https://flagcdn.com/48x36/us.png';
  imgSrc2: string = 'https://flagcdn.com/48x36/mu.png';
  selectionFrom = 'USD';
  selectionTo = 'MUR';
  amount: number = 1;
  apiResponse!: any;
  exchangeRate!: number;
  totalRate!: number;
  result!: string;

  ngOnInit(): void {
    this.countryList = Object.keys(this.countryListService.getCountrylist());
  }

  loadFlagFrom(e: Event) {
    let index = (e.target as HTMLSelectElement).value;
    let object: { [key: string]: string } =
      this.countryListService.getCountrylist();

    let ref = object[index];

    this.imgSrc1 = 'https://flagcdn.com/48x36/' + ref.toLowerCase() + '.png';
  }
  loadFlagTo(e: Event) {
    let index = (e.target as HTMLSelectElement).value;
    let object: { [key: string]: string } =
      this.countryListService.getCountrylist();

    let ref = object[index];

    this.imgSrc2 = 'https://flagcdn.com/48x36/' + ref.toLowerCase() + '.png';
  }
  swapCurrency() {
    [this.selectionFrom, this.selectionTo] = [
      this.selectionTo,
      this.selectionFrom,
    ];
    let object: { [key: string]: string } =
      this.countryListService.getCountrylist();

    let ref1 = object[this.selectionFrom];
    this.imgSrc1 = 'https://flagcdn.com/48x36/' + ref1.toLowerCase() + '.png';
    let ref2 = object[this.selectionTo];
    this.imgSrc2 = 'https://flagcdn.com/48x36/' + ref2.toLowerCase() + '.png';
  }

  getExchangeRate() {
    this.result = 'Getting exchange rate...';
    this.currencyApi.getData(this.selectionFrom).subscribe(
      (data) => {
        this.apiResponse = data;
        this.exchangeRate = this.apiResponse.conversion_rates[this.selectionTo];
        this.totalRate = this.amount * this.exchangeRate;
        this.result = `${this.amount} ${
          this.selectionFrom
        } = ${this.totalRate.toFixed(2)} ${this.selectionTo} `;
      },
      () => {
        this.result = 'An error happened.Please try again later!';
      }
    );
  }
}
