import { TestBed } from '@angular/core/testing';

import { WineNewDeactivateGuardGuard } from './wine-new-deactivate-guard.guard';

describe('WineNewDeactivateGuardGuard', () => {
  let guard: WineNewDeactivateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WineNewDeactivateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
