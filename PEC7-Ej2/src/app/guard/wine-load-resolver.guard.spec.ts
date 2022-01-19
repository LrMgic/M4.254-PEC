import { TestBed } from '@angular/core/testing';

import { WineLoadResolverGuard } from './wine-load-resolver.guard';

describe('WineLoadResolverGuard', () => {
  let guard: WineLoadResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WineLoadResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
