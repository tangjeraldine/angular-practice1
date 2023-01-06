import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylComponent } from './lazyl.component';

describe('LazylComponent', () => {
  let component: LazylComponent;
  let fixture: ComponentFixture<LazylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazylComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
