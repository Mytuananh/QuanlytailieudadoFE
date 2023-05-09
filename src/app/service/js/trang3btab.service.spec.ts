import { TestBed } from '@angular/core/testing';

import { Trang3btabService } from './trang3btab.service';

describe('Trang3btabService', () => {
  let service: Trang3btabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trang3btabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
