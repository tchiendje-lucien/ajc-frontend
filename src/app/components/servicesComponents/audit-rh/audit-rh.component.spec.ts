import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRhComponent } from './audit-rh.component';

describe('AuditRhComponent', () => {
  let component: AuditRhComponent;
  let fixture: ComponentFixture<AuditRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
