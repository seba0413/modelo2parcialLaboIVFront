import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntidad1Entidad2Component } from './listado-entidad1-entidad2.component';

describe('ListadoEntidad1Entidad2Component', () => {
  let component: ListadoEntidad1Entidad2Component;
  let fixture: ComponentFixture<ListadoEntidad1Entidad2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEntidad1Entidad2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEntidad1Entidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
