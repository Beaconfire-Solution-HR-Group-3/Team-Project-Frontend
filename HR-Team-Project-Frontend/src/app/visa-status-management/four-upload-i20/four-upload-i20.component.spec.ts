import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourUploadI20Component } from './four-upload-i20.component';

describe('FourUploadI20Component', () => {
  let component: FourUploadI20Component;
  let fixture: ComponentFixture<FourUploadI20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourUploadI20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourUploadI20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
