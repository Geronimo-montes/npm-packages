import { TestBed } from '@angular/core/testing';

import { DmContextMenuService } from './dm-context-menu.service';

describe('DmContextMenuService', () => {
  let service: DmContextMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmContextMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
