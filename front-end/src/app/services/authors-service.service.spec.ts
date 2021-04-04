import { TestBed } from '@angular/core/testing';

import { AuthorsServiceService } from './authors-service.service';

describe('AuthorsServiceService', () => {
  let service: AuthorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
