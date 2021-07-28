import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOptEadComponent } from './one-opt-ead.component';

describe('OneOptEadComponent', () => {
  let component: OneOptEadComponent;
  let fixture: ComponentFixture<OneOptEadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOptEadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOptEadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
