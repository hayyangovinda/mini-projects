import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button13Component } from './button13.component';

describe('Button13Component', () => {
  let component: Button13Component;
  let fixture: ComponentFixture<Button13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button13Component]
    });
    fixture = TestBed.createComponent(Button13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
