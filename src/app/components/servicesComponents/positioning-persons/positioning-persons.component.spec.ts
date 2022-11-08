import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositioningPersonsComponent } from './positioning-persons.component';

describe('PositioningPersonsComponent', () => {
  let component: PositioningPersonsComponent;
  let fixture: ComponentFixture<PositioningPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositioningPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositioningPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
