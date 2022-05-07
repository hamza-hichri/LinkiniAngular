import { TestBed } from '@angular/core/testing';

import { TokenStorageamanéService } from './token-storageamané.service';

describe('TokenStorageamanéService', () => {
  let service: TokenStorageamanéService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStorageamanéService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
