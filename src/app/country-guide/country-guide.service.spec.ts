import { TestBed } from '@angular/core/testing';

import { CountryGuideService } from './country-guide.service';

describe('CountryGuideService', () => {
  let service: CountryGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
