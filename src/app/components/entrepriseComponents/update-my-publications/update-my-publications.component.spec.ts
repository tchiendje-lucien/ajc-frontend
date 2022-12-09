import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyPublicationsComponent } from './update-my-publications.component';

describe('UpdateMyPublicationsComponent', () => {
  let component: UpdateMyPublicationsComponent;
  let fixture: ComponentFixture<UpdateMyPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMyPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
