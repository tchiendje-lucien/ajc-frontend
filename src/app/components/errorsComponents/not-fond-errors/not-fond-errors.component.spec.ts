import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFondErrorsComponent } from './not-fond-errors.component';

describe('NotFondErrorsComponent', () => {
  let component: NotFondErrorsComponent;
  let fixture: ComponentFixture<NotFondErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFondErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFondErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
