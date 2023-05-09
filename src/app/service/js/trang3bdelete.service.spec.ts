import { TestBed } from '@angular/core/testing';

import { Trang3bdeleteService } from './trang3bdelete.service';

describe('Trang3bdeleteService', () => {
  let service: Trang3bdeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trang3bdeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
