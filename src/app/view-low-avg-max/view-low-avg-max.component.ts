import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Team } from '../team';
import { DataServiceService } from '../data-service.service';
import { FavouriteTeamService } from '../favourite-team.service';

@Component({
  selector: 'app-view-low-avg-max',
  templateUrl: './view-low-avg-max.component.html',
  styleUrls: ['./view-low-avg-max.component.css']
})
export class ViewLowAvgMaxComponent implements OnInit {

  games:Game[];
  favouriteTeam: Team;  

  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }

  ngOnInit() {
    this.getMaxScore();
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => this.favouriteTeam = team);
  }
 
  getMaxScore(): void{
    this.dataService.get2019Games().subscribe(temp => {

      var tempArr = [];

      // loop through array of 2019 games, find games with favourite team and before round 20
      temp.forEach(element => {
        if((element.hteam == this.favouriteTeam.name || element.ateam == this.favouriteTeam.name) && element.round < 20) tempArr.push(element);
      });

      this.games = tempArr.sort(this.sortGamesByScore);
    });
  }

  // this sort is stopping completedGames from appearing in browser ?? ------------ FIX THIS
  sortGamesByScore(a, b) {
    var gameAScore = 0;
    var gameBScore = 0;
    // assign fav team score in game A
    if (a.hteam == this.favouriteTeam.name) {
      gameAScore = a.hscore;
    } else if (a.ateam == this.favouriteTeam.name) {
      gameAScore = a.ascore;
    }

    // assign fav team score in game B
    if (b.hteam == this.favouriteTeam.name) {
      gameBScore = b.hscore;
    } else if (b.ateam == this.favouriteTeam.name) {
      gameBScore = b.ascore;
    }    

    let compare = 0;
    
    if(gameAScore > gameBScore) {
      compare = 1;
    } else if (gameAScore < gameBScore) {
      compare = -1;
    }

    return compare;
  } 



}

