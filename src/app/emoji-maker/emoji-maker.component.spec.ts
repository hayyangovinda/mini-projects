import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiMakerComponent } from './emoji-maker.component';

describe('EmojiMakerComponent', () => {
  let component: EmojiMakerComponent;
  let fixture: ComponentFixture<EmojiMakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmojiMakerComponent]
    });
    fixture = TestBed.createComponent(EmojiMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
