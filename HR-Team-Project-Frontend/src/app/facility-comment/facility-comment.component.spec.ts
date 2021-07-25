import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCommentComponent } from './facility-comment.component';

describe('FacilityCommentComponent', () => {
  let component: FacilityCommentComponent;
  let fixture: ComponentFixture<FacilityCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
