import { TestBed } from '@angular/core/testing';

import { ChipsDataService } from './chips-data.service';

describe('ChipsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChipsDataService = TestBed.get(ChipsDataService);
    expect(service).toBeTruthy();
  });
});
