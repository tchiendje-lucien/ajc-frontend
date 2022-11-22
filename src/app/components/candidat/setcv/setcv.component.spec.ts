import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetcvComponent } from './setcv.component';

describe('SetcvComponent', () => {
  let component: SetcvComponent;
  let fixture: ComponentFixture<SetcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
