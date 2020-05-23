import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Team } from './team';
import { FavouriteTeamService } from './favourite-team.service';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Team Explorer Pro';
  
  favouriteTeam:Team; 
  teams:Team[];
  upcomingGames:Game[];

  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }


  ngOnInit() {
    this.getAFLTeams();
    this.getR20Games();
  // data for other components 
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => this.favouriteTeam = team);
  }


  /**Upcoming game */
  getR20Games(): void {
    this.dataService.getR20Games().subscribe(temp => { 
      this.upcomingGames = temp;
      this.upcomingGames.sort(this.sortUpcomingGamesById);      
    });
  }

  sortUpcomingGamesById(a, b) {
    const gameAId = a.id;
    const gameBId = b.id;
    let compare = 0;
    
    if(gameAId > gameBId) {
      compare = 1;
    } else if (gameAId < gameBId) {
      compare = -1;
    }

    return compare;
  }  



  /**for team selection */
  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }
  
  /**Select favourite Team */
  onSelect(team: Team): void{
    this.favouriteTeam = team;
    this.FavouriteTeamService.setFavouriteTeam(this.favouriteTeam); 
  }


}
