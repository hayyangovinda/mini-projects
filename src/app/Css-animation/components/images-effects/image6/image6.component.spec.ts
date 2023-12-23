import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image6Component } from './image6.component';

describe('Image6Component', () => {
  let component: Image6Component;
  let fixture: ComponentFixture<Image6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Image6Component]
    });
    fixture = TestBed.createComponent(Image6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
