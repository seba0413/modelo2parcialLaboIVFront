import { TestBed } from '@angular/core/testing';

import { Entidad2Service } from './entidad2.service';

describe('Entidad2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Entidad2Service = TestBed.get(Entidad2Service);
    expect(service).toBeTruthy();
  });
});
