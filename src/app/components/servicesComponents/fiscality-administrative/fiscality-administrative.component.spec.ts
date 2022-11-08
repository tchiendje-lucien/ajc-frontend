import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalityAdministrativeComponent } from './fiscality-administrative.component';

describe('FiscalityAdministrativeComponent', () => {
  let component: FiscalityAdministrativeComponent;
  let fixture: ComponentFixture<FiscalityAdministrativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalityAdministrativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalityAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
