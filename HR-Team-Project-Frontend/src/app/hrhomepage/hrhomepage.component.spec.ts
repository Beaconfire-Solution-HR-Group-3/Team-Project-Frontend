import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrhomepageComponent } from './hrhomepage.component';

describe('HrhomepageComponent', () => {
  let component: HrhomepageComponent;
  let fixture: ComponentFixture<HrhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
