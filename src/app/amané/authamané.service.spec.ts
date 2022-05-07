import { TestBed } from '@angular/core/testing';

import { AuthamanéService } from './authamané.service';

describe('AuthamanéService', () => {
  let service: AuthamanéService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthamanéService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
