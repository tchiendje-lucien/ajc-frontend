import { TestBed } from '@angular/core/testing';

import { RespoEntrepriseServiceService } from './respo-entreprise-service.service';

describe('RespoEntrepriseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RespoEntrepriseServiceService = TestBed.get(RespoEntrepriseServiceService);
    expect(service).toBeTruthy();
  });
});
