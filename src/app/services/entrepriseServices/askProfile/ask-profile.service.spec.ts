import { TestBed } from '@angular/core/testing';

import { AskProfileService } from './ask-profile.service';

describe('AskProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AskProfileService = TestBed.get(AskProfileService);
    expect(service).toBeTruthy();
  });
});
