import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationExercisesComponent } from './multiplication-exercises.component';

describe('MultiplicationExercisesComponent', () => {
  let component: MultiplicationExercisesComponent;
  let fixture: ComponentFixture<MultiplicationExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicationExercisesComponent]
    });
    fixture = TestBed.createComponent(MultiplicationExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
