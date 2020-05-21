import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamSeasonResultsComponent } from './view-team-season-results.component';

describe('ViewTeamSeasonResultsComponent', () => {
  let component: ViewTeamSeasonResultsComponent;
  let fixture: ComponentFixture<ViewTeamSeasonResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeamSeasonResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeamSeasonResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
