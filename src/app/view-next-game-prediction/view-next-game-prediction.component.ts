import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Tip } from '../tip';
import { Team } from '../team';
import { FavouriteTeamService } from '../favourite-team.service';

@Component({
  selector: 'app-view-next-game-prediction',
  templateUrl: './view-next-game-prediction.component.html',
  styleUrls: ['./view-next-game-prediction.component.css']
})
export class ViewNextGamePredictionComponent implements OnInit {

  tips:Tip[];
  favouriteTeam:Team;
  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }


  ngOnInit() {
    this.getTips();
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => this.favouriteTeam = team);

  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp;});
  }

}
