import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiImageGeneratorComponent } from './ai-image-generator.component';

describe('AiImageGeneratorComponent', () => {
  let component: AiImageGeneratorComponent;
  let fixture: ComponentFixture<AiImageGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiImageGeneratorComponent]
    });
    fixture = TestBed.createComponent(AiImageGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
