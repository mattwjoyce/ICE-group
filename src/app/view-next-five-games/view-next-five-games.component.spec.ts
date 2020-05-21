import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNextFiveGamesComponent } from './view-next-five-games.component';

describe('ViewNextFiveGamesComponent', () => {
  let component: ViewNextFiveGamesComponent;
  let fixture: ComponentFixture<ViewNextFiveGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNextFiveGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNextFiveGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
