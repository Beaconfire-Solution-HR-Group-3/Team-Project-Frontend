import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HremployeeprofileComponent } from './hremployeeprofile.component';

describe('HremployeeprofileComponent', () => {
  let component: HremployeeprofileComponent;
  let fixture: ComponentFixture<HremployeeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HremployeeprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HremployeeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
