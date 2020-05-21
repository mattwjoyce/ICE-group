import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRivalGamesComponent } from './view-rival-games.component';

describe('ViewRivalGamesComponent', () => {
  let component: ViewRivalGamesComponent;
  let fixture: ComponentFixture<ViewRivalGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRivalGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRivalGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
