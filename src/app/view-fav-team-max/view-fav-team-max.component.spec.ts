import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFavTeamMaxComponent } from './view-fav-team-max.component';

describe('ViewFavTeamMaxComponent', () => {
  let component: ViewFavTeamMaxComponent;
  let fixture: ComponentFixture<ViewFavTeamMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFavTeamMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFavTeamMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
