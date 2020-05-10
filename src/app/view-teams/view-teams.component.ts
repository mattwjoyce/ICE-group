import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
import { Game } from '../game';
import { Tip } from '../tip';
import { Ladder } from '../ladder';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent implements OnInit {

  teams:Team[];
  games:Game[];
  tips:Tip[];
  ladder:Ladder[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
    this.getLadder();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;});
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp;});
  }

  getLadder(): void {
    this.dataService.getLadder().subscribe(temp => { this.ladder = temp;});
  }

  

}


