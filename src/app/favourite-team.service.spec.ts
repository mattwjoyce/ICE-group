import { TestBed } from '@angular/core/testing';

import { FavouriteTeamService } from './favourite-team.service';

describe('FavouriteTeamService', () => {
  let service: FavouriteTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
