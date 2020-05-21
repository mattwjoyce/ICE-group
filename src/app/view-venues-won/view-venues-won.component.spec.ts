import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVenuesWonComponent } from './view-venues-won.component';

describe('ViewVenuesWonComponent', () => {
  let component: ViewVenuesWonComponent;
  let fixture: ComponentFixture<ViewVenuesWonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVenuesWonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVenuesWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
