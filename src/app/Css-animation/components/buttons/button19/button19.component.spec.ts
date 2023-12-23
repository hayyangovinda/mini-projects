import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button19Component } from './button19.component';

describe('Button19Component', () => {
  let component: Button19Component;
  let fixture: ComponentFixture<Button19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button19Component]
    });
    fixture = TestBed.createComponent(Button19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
