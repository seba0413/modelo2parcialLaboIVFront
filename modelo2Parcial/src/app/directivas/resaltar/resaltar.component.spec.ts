import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaltarComponent } from './resaltar.component';

describe('ResaltarComponent', () => {
  let component: ResaltarComponent;
  let fixture: ComponentFixture<ResaltarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaltarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
