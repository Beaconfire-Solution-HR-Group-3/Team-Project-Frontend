import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWait983Component } from './three-wait983.component';

describe('ThreeWait983Component', () => {
  let component: ThreeWait983Component;
  let fixture: ComponentFixture<ThreeWait983Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeWait983Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeWait983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
