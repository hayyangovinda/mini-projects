import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button16Component } from './button16.component';

describe('Button16Component', () => {
  let component: Button16Component;
  let fixture: ComponentFixture<Button16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button16Component]
    });
    fixture = TestBed.createComponent(Button16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
