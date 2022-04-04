import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtpcrTestFormComponent } from './rtpcr-test-form.component';

describe('RtpcrTestFormComponent', () => {
  let component: RtpcrTestFormComponent;
  let fixture: ComponentFixture<RtpcrTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtpcrTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtpcrTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
