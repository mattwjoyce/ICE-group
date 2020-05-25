import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPointDiffComponent } from './view-point-diff.component';

describe('ViewPointDiffComponent', () => {
  let component: ViewPointDiffComponent;
  let fixture: ComponentFixture<ViewPointDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPointDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPointDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
