import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntidad1Component } from './listado-entidad1.component';

describe('ListadoEntidad1Component', () => {
  let component: ListadoEntidad1Component;
  let fixture: ComponentFixture<ListadoEntidad1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEntidad1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEntidad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
