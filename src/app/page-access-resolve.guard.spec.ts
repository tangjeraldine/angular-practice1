import { TestBed } from '@angular/core/testing';

import { PageAccessResolveGuard } from './page-access-resolve.guard';

describe('PageAccessResolveGuard', () => {
  let guard: PageAccessResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageAccessResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
