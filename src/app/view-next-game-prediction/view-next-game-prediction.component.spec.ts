import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNextGamePredictionComponent } from './view-next-game-prediction.component';

describe('ViewNextGamePredictionComponent', () => {
  let component: ViewNextGamePredictionComponent;
  let fixture: ComponentFixture<ViewNextGamePredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNextGamePredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNextGamePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
