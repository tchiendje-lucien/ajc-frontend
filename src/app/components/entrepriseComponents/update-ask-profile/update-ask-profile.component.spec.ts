import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAskProfileComponent } from './update-ask-profile.component';

describe('UpdateAskProfileComponent', () => {
  let component: UpdateAskProfileComponent;
  let fixture: ComponentFixture<UpdateAskProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAskProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAskProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
