import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRhComponent } from './management-rh.component';

describe('ManagementRhComponent', () => {
  let component: ManagementRhComponent;
  let fixture: ComponentFixture<ManagementRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
