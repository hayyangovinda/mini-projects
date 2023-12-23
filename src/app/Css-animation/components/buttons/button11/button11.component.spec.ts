import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button11Component } from './button11.component';

describe('Button11Component', () => {
  let component: Button11Component;
  let fixture: ComponentFixture<Button11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button11Component]
    });
    fixture = TestBed.createComponent(Button11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
