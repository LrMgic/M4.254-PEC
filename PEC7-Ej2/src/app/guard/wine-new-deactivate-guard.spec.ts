import { TestBed } from '@angular/core/testing';
import { WineNewDeactivateGuard } from './wine-new-deactivate-guard';

describe('WineNewDeactivateGuard', () => {
  let guard: WineNewDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WineNewDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
