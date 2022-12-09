import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskProfileComponent } from './ask-profile.component';

describe('AskProfileComponent', () => {
  let component: AskProfileComponent;
  let fixture: ComponentFixture<AskProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
