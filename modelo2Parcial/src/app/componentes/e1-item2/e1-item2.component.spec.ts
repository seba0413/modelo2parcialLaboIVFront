import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1Item2Component } from './e1-item2.component';

describe('E1Item2Component', () => {
  let component: E1Item2Component;
  let fixture: ComponentFixture<E1Item2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1Item2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E1Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
