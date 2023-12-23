import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button15Component } from './button15.component';

describe('Button15Component', () => {
  let component: Button15Component;
  let fixture: ComponentFixture<Button15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button15Component]
    });
    fixture = TestBed.createComponent(Button15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
