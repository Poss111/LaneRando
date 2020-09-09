import { TestBed } from '@angular/core/testing';

import { LeagueVersionsService } from './league-versions.service';
import {HttpClientTestingModule, HttpTestingController} from 'src/node_modules/@angular/common/http/testing';

describe('LeagueVersionsService', () => {
  let service: LeagueVersionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule]});
    service = TestBed.inject(LeagueVersionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of league versions as a Observable<string[]>', () => {
    const versions = [
      '1.10.11',
      '1.9.1'
    ];

    service.getLeagueVersions().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(versions);
    });

    const req = httpMock.expectOne('https://ddragon.leagueoflegends.com/api/versions.json');
    expect(req.request.method).toBe('GET');
    req.flush(versions);
  });

  it ('should return a list of league versions', () => {
    const leagueVersions = service.getLeagueVersions();
    leagueVersions.subscribe((value) => {
      expect(value.length).toBeGreaterThan(1);
    });
  });
});
