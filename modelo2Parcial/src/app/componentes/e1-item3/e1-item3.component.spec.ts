import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1Item3Component } from './e1-item3.component';

describe('E1Item3Component', () => {
  let component: E1Item3Component;
  let fixture: ComponentFixture<E1Item3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1Item3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E1Item3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
