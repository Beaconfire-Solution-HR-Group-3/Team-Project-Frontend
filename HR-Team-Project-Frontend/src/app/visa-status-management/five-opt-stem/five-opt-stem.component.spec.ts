import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveOptStemComponent } from './five-opt-stem.component';

describe('FiveOptStemComponent', () => {
  let component: FiveOptStemComponent;
  let fixture: ComponentFixture<FiveOptStemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveOptStemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveOptStemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
