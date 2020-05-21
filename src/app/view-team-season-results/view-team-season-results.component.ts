import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Game } from '../game';

@Component({
  selector: 'app-view-team-season-results',
  templateUrl: './view-team-season-results.component.html',
  styleUrls: ['./view-team-season-results.component.css']
})
export class ViewTeamSeasonResultsComponent implements OnInit {

  favCompletedGames:Game[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getFavCompletedGames();
  }

  getFavCompletedGames(): void{
    this.dataService.get2019Games().subscribe(temp => {

      var tempArr = [];

      // loop through array of 2019 games, find games with favourite team and before round 20
      temp.forEach(element => {
        if((element.hteam == 'Carlton' || element.ateam == 'Carlton') && element.round < 20) tempArr.push(element);
      });

      this.favCompletedGames = tempArr;
    });
  }

}
