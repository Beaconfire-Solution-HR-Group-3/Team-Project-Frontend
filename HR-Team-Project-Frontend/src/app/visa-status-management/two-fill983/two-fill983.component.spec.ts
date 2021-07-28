import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFill983Component } from './two-fill983.component';

describe('TwoFill983Component', () => {
  let component: TwoFill983Component;
  let fixture: ComponentFixture<TwoFill983Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoFill983Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFill983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
