import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenErrorsComponent } from './forbidden-errors.component';

describe('ForbiddenErrorsComponent', () => {
  let component: ForbiddenErrorsComponent;
  let fixture: ComponentFixture<ForbiddenErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbiddenErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
