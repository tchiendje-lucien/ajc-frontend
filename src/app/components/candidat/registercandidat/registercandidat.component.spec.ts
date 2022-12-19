import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercandidatComponent } from './registercandidat.component';

describe('RegistercandidatComponent', () => {
  let component: RegistercandidatComponent;
  let fixture: ComponentFixture<RegistercandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistercandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistercandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
