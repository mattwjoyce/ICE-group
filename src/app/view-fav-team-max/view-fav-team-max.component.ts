import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Team } from '../team';
import { DataServiceService } from '../data-service.service';
import { FavouriteTeamService } from '../favourite-team.service';

@Component({
  selector: 'app-view-fav-team-max',
  templateUrl: './view-fav-team-max.component.html',
  styleUrls: ['./view-fav-team-max.component.css']
})
export class ViewFavTeamMaxComponent implements OnInit {

  games:Game[];
  favouriteTeam: Team;
  

  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }

  ngOnInit() {
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => {this.favouriteTeam = team; this.getMaxScore();});
  }
 
  getMaxScore(): void{
    this.dataService.get2019Games().subscribe(temp => {

      var tempArr = [];
      var highest = 0;

      // loop through array of 2019 games, find games with favourite team and before round 20
      temp.forEach(element => {
        if(element.hteam == this.favouriteTeam.name && element.round < 20) {
          if (element.hscore > highest) {
            highest = element.hscore;
            tempArr.unshift(element);
          }
        }

        if(element.ateam == this.favouriteTeam.name && element.round < 20) {
          if (element.ascore > highest) {
            highest = element.ascore;
            tempArr.unshift(element);
          }
        } 
      });

      this.games = tempArr/*.sort(this.sortGamesByScore)*/;
    });
  }
}
