import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { Game } from '../game';
import { DataServiceService } from '../data-service.service';
import { FavouriteTeamService } from '../favourite-team.service';
@Component({
  selector: 'app-view-rival-games',
  templateUrl: './view-rival-games.component.html',
  styleUrls: ['./view-rival-games.component.css']
})
export class ViewRivalGamesComponent implements OnInit {

  games:Game[];
  teams:Team[];
  favouriteTeam:Team;
  rivalTeam:Team; 
  

  

  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }

  ngOnInit() {
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => this.favouriteTeam = team);
    this.FavouriteTeamService.getRivalTeam().subscribe(team => this.rivalTeam = team);
    this.get2019Games();
  }

  
  get2019Games(): void {
    this.dataService.get2019Games().subscribe(temp => { this.games = temp;});
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

}
