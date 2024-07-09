import { TestBed } from '@angular/core/testing';

import { DMFakerProLocaleService } from './dm-faker-pro-locale.service';

describe('DMFakerProLocaleService', () => {
  let service: DMFakerProLocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DMFakerProLocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
