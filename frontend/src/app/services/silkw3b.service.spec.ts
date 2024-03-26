import { TestBed } from '@angular/core/testing';

import { Silkw3bService } from './silkw3b.service';

describe('Silkw3bService', () => {
  let service: Silkw3bService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Silkw3bService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
