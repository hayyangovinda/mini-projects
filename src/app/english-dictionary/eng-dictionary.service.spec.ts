import { TestBed } from '@angular/core/testing';

import { EngDictionaryService } from './eng-dictionary.service';

describe('EngDictionaryService', () => {
  let service: EngDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
