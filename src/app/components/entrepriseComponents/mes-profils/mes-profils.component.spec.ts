import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProfilsComponent } from './mes-profils.component';

describe('MesProfilsComponent', () => {
  let component: MesProfilsComponent;
  let fixture: ComponentFixture<MesProfilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesProfilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
