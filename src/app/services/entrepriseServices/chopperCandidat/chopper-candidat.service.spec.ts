import { TestBed } from '@angular/core/testing';

import { ChopperCandidatService } from './chopper-candidat.service';

describe('ChopperCandidatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChopperCandidatService = TestBed.get(ChopperCandidatService);
    expect(service).toBeTruthy();
  });
});
