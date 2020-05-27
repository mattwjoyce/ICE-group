import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLowAvgMaxComponent } from './view-low-avg-max.component';

describe('ViewLowAvgMaxComponent', () => {
  let component: ViewLowAvgMaxComponent;
  let fixture: ComponentFixture<ViewLowAvgMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLowAvgMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLowAvgMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
