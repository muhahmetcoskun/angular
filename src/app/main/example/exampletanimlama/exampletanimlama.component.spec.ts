import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampletanimlamaComponent } from './exampletanimlama.component';

describe('ExampletanimlamaComponent', () => {
  let component: ExampletanimlamaComponent;
  let fixture: ComponentFixture<ExampletanimlamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampletanimlamaComponent]
    });
    fixture = TestBed.createComponent(ExampletanimlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
