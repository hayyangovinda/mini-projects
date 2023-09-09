import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionGameComponent } from './addition-game.component';

describe('AdditionGameComponent', () => {
  let component: AdditionGameComponent;
  let fixture: ComponentFixture<AdditionGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionGameComponent]
    });
    fixture = TestBed.createComponent(AdditionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
