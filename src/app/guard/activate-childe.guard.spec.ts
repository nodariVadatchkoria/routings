import { TestBed } from '@angular/core/testing';

import { ActivateChildeGuard } from './activate-childe.guard';

describe('ActivateChildeGuard', () => {
  let guard: ActivateChildeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateChildeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
