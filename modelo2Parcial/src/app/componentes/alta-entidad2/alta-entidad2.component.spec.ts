import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEntidad2Component } from './alta-entidad2.component';

describe('AltaEntidad2Component', () => {
  let component: AltaEntidad2Component;
  let fixture: ComponentFixture<AltaEntidad2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaEntidad2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaEntidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
