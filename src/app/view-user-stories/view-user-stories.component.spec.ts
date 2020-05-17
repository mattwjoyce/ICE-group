import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserStoriesComponent } from './view-user-stories.component';

describe('ViewUserStoriesComponent', () => {
  let component: ViewUserStoriesComponent;
  let fixture: ComponentFixture<ViewUserStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
