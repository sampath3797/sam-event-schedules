import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventschedulesComponent } from './eventschedules.component';

describe('EventschedulesComponent', () => {
  let component: EventschedulesComponent;
  let fixture: ComponentFixture<EventschedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventschedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
