import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryGuideComponent } from './country-guide.component';

describe('CountryGuideComponent', () => {
  let component: CountryGuideComponent;
  let fixture: ComponentFixture<CountryGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryGuideComponent]
    });
    fixture = TestBed.createComponent(CountryGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
