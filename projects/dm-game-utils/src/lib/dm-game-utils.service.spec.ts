import { TestBed } from '@angular/core/testing';

import { DmGameUtilsService } from './dm-game-utils.service';

describe('DmGameUtilsService', () => {
  let service: DmGameUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmGameUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
