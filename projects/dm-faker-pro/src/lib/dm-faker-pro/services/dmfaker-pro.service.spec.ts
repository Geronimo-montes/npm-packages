import { TestBed } from '@angular/core/testing';

import { DMFakerProService } from './dmfaker-pro.service';

describe('DMFakerProService', () => {
  let service: DMFakerProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DMFakerProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
