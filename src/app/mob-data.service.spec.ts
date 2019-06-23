import { TestBed } from '@angular/core/testing';

import { MobDataService } from './mob-data.service';

describe('MobDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobDataService = TestBed.get(MobDataService);
    expect(service).toBeTruthy();
  });
});
