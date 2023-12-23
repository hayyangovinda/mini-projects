import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button18Component } from './button18.component';

describe('Button18Component', () => {
  let component: Button18Component;
  let fixture: ComponentFixture<Button18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button18Component]
    });
    fixture = TestBed.createComponent(Button18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
