import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokesGeneratorComponent } from './dad-jokes-generator.component';

describe('DadJokesGeneratorComponent', () => {
  let component: DadJokesGeneratorComponent;
  let fixture: ComponentFixture<DadJokesGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadJokesGeneratorComponent]
    });
    fixture = TestBed.createComponent(DadJokesGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
