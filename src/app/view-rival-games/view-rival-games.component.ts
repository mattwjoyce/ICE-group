import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { DataServiceService } from '../data-service.service';
import { FavouriteTeamService } from '../favourite-team.service';
@Component({
  selector: 'app-view-rival-games',
  templateUrl: './view-rival-games.component.html',
  styleUrls: ['./view-rival-games.component.css']
})
export class ViewRivalGamesComponent implements OnInit {

  favouriteTeam:Team;

  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }

  ngOnInit(): void {
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => this.favouriteTeam = team);
  }

}
