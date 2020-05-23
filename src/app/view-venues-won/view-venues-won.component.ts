import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Game } from '../game';
import { FavouriteTeamService } from '../favourite-team.service';
import { Team } from '../team';

@Component({
  selector: 'app-view-venues-won',
  templateUrl: './view-venues-won.component.html',
  styleUrls: ['./view-venues-won.component.css']
})
export class ViewVenuesWonComponent implements OnInit {

  venues:Game[];
  favouriteTeam:Team;

  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }

  ngOnInit() {
    this.getVenuesWon();
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => this.favouriteTeam = team);
    
  }

  getVenuesWon(): void {
    this.dataService.get2019Games().subscribe(temp => {

      var tempArr = [];

      // loop through array of 2019 games before round 20, find games where winner==favouriteTeam, store venue name in arr
      temp.forEach(element => {
        if(element.winner == this.favouriteTeam.name && element.round < 20) tempArr.push(element.venue);
      });

      // filter arr of venues for no duplicates
      this.venues = tempArr.filter((n, i) => tempArr.indexOf(n) === i);

    });
  }

}
