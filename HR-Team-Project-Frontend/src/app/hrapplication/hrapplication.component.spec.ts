import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrapplicationComponent } from './hrapplication.component';

describe('HrapplicationComponent', () => {
  let component: HrapplicationComponent;
  let fixture: ComponentFixture<HrapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
