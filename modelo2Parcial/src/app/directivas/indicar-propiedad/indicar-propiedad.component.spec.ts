import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicarPropiedadComponent } from './indicar-propiedad.component';

describe('IndicarPropiedadComponent', () => {
  let component: IndicarPropiedadComponent;
  let fixture: ComponentFixture<IndicarPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicarPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
