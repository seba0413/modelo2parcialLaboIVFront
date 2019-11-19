import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntidad2Item3Component } from './listado-entidad2-item3.component';

describe('ListadoEntidad2Item3Component', () => {
  let component: ListadoEntidad2Item3Component;
  let fixture: ComponentFixture<ListadoEntidad2Item3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEntidad2Item3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEntidad2Item3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
