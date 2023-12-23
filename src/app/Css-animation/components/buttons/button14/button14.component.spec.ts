import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button14Component } from './button14.component';

describe('Button14Component', () => {
  let component: Button14Component;
  let fixture: ComponentFixture<Button14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button14Component]
    });
    fixture = TestBed.createComponent(Button14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
