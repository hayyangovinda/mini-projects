import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button17Component } from './button17.component';

describe('Button17Component', () => {
  let component: Button17Component;
  let fixture: ComponentFixture<Button17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button17Component]
    });
    fixture = TestBed.createComponent(Button17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
