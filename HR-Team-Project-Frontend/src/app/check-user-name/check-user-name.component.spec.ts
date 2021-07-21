import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUserNameComponent } from './check-user-name.component';

describe('CheckUserNameComponent', () => {
  let component: CheckUserNameComponent;
  let fixture: ComponentFixture<CheckUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckUserNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
