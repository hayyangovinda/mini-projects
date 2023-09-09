import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhacAMoleComponent } from './whac-a-mole.component';

describe('WhacAMoleComponent', () => {
  let component: WhacAMoleComponent;
  let fixture: ComponentFixture<WhacAMoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhacAMoleComponent]
    });
    fixture = TestBed.createComponent(WhacAMoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
