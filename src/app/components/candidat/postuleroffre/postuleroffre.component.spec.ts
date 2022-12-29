import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostuleroffreComponent } from './postuleroffre.component';

describe('PostuleroffreComponent', () => {
  let component: PostuleroffreComponent;
  let fixture: ComponentFixture<PostuleroffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostuleroffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostuleroffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
