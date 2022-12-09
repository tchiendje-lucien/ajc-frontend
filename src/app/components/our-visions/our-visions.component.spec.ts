import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVisionsComponent } from './our-visions.component';

describe('OurVisionsComponent', () => {
  let component: OurVisionsComponent;
  let fixture: ComponentFixture<OurVisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurVisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurVisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
