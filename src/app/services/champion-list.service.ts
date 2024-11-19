import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChampionData } from '../models/interfaces/ChampionData';

@Injectable({
  providedIn: 'root'
})
export class ChampionListService {
  private apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.22.1/data/en_US/champion.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ChampionData> {
    return this.http.get<ChampionData>(this.apiUrl);
  }
}
