import { TestBed } from '@angular/core/testing';

import { AuthorizatioService } from './authorization.service';

describe('AuthorizatioService', () => {
  let service: AuthorizatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
