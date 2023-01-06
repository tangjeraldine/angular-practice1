import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New5Component } from './new5.component';

describe('New5Component', () => {
  let component: New5Component;
  let fixture: ComponentFixture<New5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ New5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(New5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
