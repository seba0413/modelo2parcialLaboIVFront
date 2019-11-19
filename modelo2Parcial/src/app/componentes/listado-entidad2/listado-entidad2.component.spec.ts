import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntidad2Component } from './listado-entidad2.component';

describe('ListadoEntidad2Component', () => {
  let component: ListadoEntidad2Component;
  let fixture: ComponentFixture<ListadoEntidad2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEntidad2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEntidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
