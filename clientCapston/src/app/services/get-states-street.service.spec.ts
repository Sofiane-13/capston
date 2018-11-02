import { TestBed } from '@angular/core/testing';

import { GetStatesStreetService } from './get-states-street.service';

describe('GetStatesStreetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStatesStreetService = TestBed.get(GetStatesStreetService);
    expect(service).toBeTruthy();
  });
});
