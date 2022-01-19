import { TestBed } from '@angular/core/testing';

import { WineAppInterceptor } from './wine-app.interceptor';

describe('WineAppInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      WineAppInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: WineAppInterceptor = TestBed.inject(WineAppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
