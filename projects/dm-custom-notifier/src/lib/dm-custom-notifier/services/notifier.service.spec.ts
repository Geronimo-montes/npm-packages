import { TestBed } from '@angular/core/testing';

import { DMNotifierService } from './notifier.service';

describe('NotifierService', () => {
  let service: DMNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DMNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
