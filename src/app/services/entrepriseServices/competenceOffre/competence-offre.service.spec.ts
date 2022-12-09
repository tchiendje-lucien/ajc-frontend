import { TestBed } from '@angular/core/testing';

import { CompetenceOffreService } from './competence-offre.service';

describe('CompetenceOffreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetenceOffreService = TestBed.get(CompetenceOffreService);
    expect(service).toBeTruthy();
  });
});
