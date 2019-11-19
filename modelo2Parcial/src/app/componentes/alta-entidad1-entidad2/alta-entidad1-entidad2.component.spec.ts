import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEntidad1Entidad2Component } from './alta-entidad1-entidad2.component';

describe('AltaEntidad1Entidad2Component', () => {
  let component: AltaEntidad1Entidad2Component;
  let fixture: ComponentFixture<AltaEntidad1Entidad2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaEntidad1Entidad2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaEntidad1Entidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
