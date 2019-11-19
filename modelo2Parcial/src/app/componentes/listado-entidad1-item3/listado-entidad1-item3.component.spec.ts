import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntidad1Item3Component } from './listado-entidad1-item3.component';

describe('ListadoEntidad1Item3Component', () => {
  let component: ListadoEntidad1Item3Component;
  let fixture: ComponentFixture<ListadoEntidad1Item3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEntidad1Item3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEntidad1Item3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
