import { TestBed } from '@angular/core/testing';

import { RadicadosService } from './radicados.service';

describe('RadicadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadicadosService = TestBed.get(RadicadosService);
    expect(service).toBeTruthy();
  });
});
