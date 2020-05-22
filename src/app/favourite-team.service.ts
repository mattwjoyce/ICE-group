import { Injectable } from '@angular/core';
import { Team } from './team';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteTeamService {

  
  private _selectedTeamSource: BehaviorSubject<Team> = new BehaviorSubject(null);
  
  getFavouriteTeam(): Observable<Team> {
    return this._selectedTeamSource.asObservable();
  }

  constructor() {} 

  setFavouriteTeam(Team) {
    this._selectedTeamSource.next(Team);
  }
  
}

  
