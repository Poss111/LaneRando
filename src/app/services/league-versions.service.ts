import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeagueVersionsService {

  constructor(private httpClient: HttpClient) { }

  public getLeagueVersions(): Observable<string[]> {
    return this.httpClient.get<string[]>('https://ddragon.leagueoflegends.com/api/versions.json');
  }

}
