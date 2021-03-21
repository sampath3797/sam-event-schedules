import { TestBed } from '@angular/core/testing';

import { EventschedulesService } from './eventschedules.service';

describe('EventschedulesService', () => {
  let service: EventschedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventschedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
