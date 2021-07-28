import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixOptStemEadComponent } from './six-opt-stem-ead.component';

describe('SixOptStemEadComponent', () => {
  let component: SixOptStemEadComponent;
  let fixture: ComponentFixture<SixOptStemEadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixOptStemEadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixOptStemEadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
