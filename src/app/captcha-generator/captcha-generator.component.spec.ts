import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaGeneratorComponent } from './captcha-generator.component';

describe('CaptchaGeneratorComponent', () => {
  let component: CaptchaGeneratorComponent;
  let fixture: ComponentFixture<CaptchaGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptchaGeneratorComponent]
    });
    fixture = TestBed.createComponent(CaptchaGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
