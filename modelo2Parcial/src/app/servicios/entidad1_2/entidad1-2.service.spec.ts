import { TestBed } from '@angular/core/testing';

import { Entidad12Service } from './entidad1-2.service';

describe('Entidad12Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Entidad12Service = TestBed.get(Entidad12Service);
    expect(service).toBeTruthy();
  });
});
