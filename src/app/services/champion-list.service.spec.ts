import { TestBed } from '@angular/core/testing';

import { ChampionListService } from './champion-list.service';

describe('ChampionListService', () => {
  let service: ChampionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
