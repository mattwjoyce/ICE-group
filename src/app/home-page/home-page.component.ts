import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
import { Game } from '../game';
import { Ladder } from '../ladder';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  teams:Team[];
  games:Game[];
  upcomingGames:Game[];
  ladder:Ladder[];
  

  constructor(private dataService: DataServiceService) {

  }

  ngOnInit(){
    this.getAFLTeams();
    this.getR19Games();
    this.getR20Games();
    this.getLadder();

  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }
  
  getR19Games(): void {
    this.dataService.getR19Games().subscribe(temp => { this.games = temp;});
  }

  getR20Games(): void {
    this.dataService.getR20Games().subscribe(temp => { 
      this.upcomingGames = temp;
      this.upcomingGames.sort(this.sortUpcomingGamesById);      
    });
  }

  /* Sort round 20 games in order of their scheduled time */
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

  getLadder(): void {
    this.dataService.getLadder().subscribe(temp => { 
      this.ladder = temp;
      this.ladder.sort(this.sortLadder);
    });
  }

  /* Sort current team ranking at round 19 completion */
  sortLadder(a, b) {
    const teamARank = a.rank;
    const teamBRank = b.rank;
    let compare = 0;
    
    if(teamARank > teamBRank) {
      compare = 1;
    } else if (teamARank < teamBRank) {
      compare = -1;
    }

    return compare;
  }
  
}
