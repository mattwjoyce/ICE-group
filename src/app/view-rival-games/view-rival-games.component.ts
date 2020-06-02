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

  favouriteTeam:Team;
  rivalTeam:Team; 
  rivalGames:Game[];

  

  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }

  ngOnInit() {
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => { this.favouriteTeam = team; this.getRivalGames();});
    this.FavouriteTeamService.getRivalTeam().subscribe(team => { this.rivalTeam = team; this.getRivalGames();});
  }

  getRivalGames(): void{
    this.dataService.get2019Games().subscribe(temp => {

      var tempArr = [];

      // loop through array of 2019 games, find games with favourite team and round 20 onwards


      temp.forEach(element => {
        if((element.hteam == this.favouriteTeam.name && element.ateam == this.rivalTeam.name) || 
          element.ateam == this.favouriteTeam.name  && element.hteam == this.rivalTeam.name) 
          tempArr.push(element);
      });

      this.rivalGames = tempArr;
    });
  }

  
  

}
