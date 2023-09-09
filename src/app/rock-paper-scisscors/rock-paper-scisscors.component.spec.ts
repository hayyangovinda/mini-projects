import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScisscorsComponent } from './rock-paper-scisscors.component';

describe('RockPaperScisscorsComponent', () => {
  let component: RockPaperScisscorsComponent;
  let fixture: ComponentFixture<RockPaperScisscorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RockPaperScisscorsComponent]
    });
    fixture = TestBed.createComponent(RockPaperScisscorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
