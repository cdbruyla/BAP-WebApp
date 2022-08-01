import { TestBed } from '@angular/core/testing';
import { BlobInService } from './blob-in.service';

describe('BlobInService', () => {
  let service: BlobInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlobInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

