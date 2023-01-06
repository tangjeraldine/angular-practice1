import { TestBed } from '@angular/core/testing';

import { Pageaccess2Guard } from './pageaccess2.guard';

describe('Pageaccess2Guard', () => {
  let guard: Pageaccess2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Pageaccess2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
