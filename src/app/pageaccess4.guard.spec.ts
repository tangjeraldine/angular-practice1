import { TestBed } from '@angular/core/testing';

import { Pageaccess4Guard } from './pageaccess4.guard';

describe('Pageaccess4Guard', () => {
  let guard: Pageaccess4Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Pageaccess4Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
