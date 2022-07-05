import { TestBed } from '@angular/core/testing';

import { PRODUCTService } from './chess-champion.service';

describe('ProductService', () => {
  let service: PRODUCTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PRODUCTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
