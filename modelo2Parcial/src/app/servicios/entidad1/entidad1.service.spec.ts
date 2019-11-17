import { TestBed } from '@angular/core/testing';

import { Entidad1Service } from './entidad1.service';

describe('Entidad1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Entidad1Service = TestBed.get(Entidad1Service);
    expect(service).toBeTruthy();
  });
});
