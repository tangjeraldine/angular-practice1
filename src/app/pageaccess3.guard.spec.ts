import { TestBed } from '@angular/core/testing';

import { Pageaccess3Guard } from './pageaccess3.guard';

describe('Pageaccess3Guard', () => {
  let guard: Pageaccess3Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Pageaccess3Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
