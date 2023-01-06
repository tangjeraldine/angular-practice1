import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsieComponent } from './formsie.component';

describe('FormsieComponent', () => {
  let component: FormsieComponent;
  let fixture: ComponentFixture<FormsieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
