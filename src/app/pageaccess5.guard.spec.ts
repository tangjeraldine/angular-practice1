import { TestBed } from '@angular/core/testing';

import { Pageaccess5Guard } from './pageaccess5.guard';

describe('Pageaccess5Guard', () => {
  let guard: Pageaccess5Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Pageaccess5Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
