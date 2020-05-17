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

  constructor(private dataService: DataServiceService) { }

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
    this.dataService.getR20Games().subscribe(temp => { this.upcomingGames = temp;});
  }

  getLadder(): void {
    this.dataService.getLadder().subscribe(temp => { this.ladder = temp;});
  }
  
}
