import { TestBed } from '@angular/core/testing';

import { MissionOffreService } from './mission-offre.service';

describe('MissionOffreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionOffreService = TestBed.get(MissionOffreService);
    expect(service).toBeTruthy();
  });
});
