import { TestBed } from '@angular/core/testing';

import { TokenhamzawiService } from './tokenhamzawi.service';

describe('TokenhamzawiService', () => {
  let service: TokenhamzawiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenhamzawiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
