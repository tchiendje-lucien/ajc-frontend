import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatlistComponent } from './candidatlist.component';

describe('CandidatlistComponent', () => {
  let component: CandidatlistComponent;
  let fixture: ComponentFixture<CandidatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
