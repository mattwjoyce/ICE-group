import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Team } from './team';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team Explorer Pro';
  
  favouriteTeam:Team; 
  teams:Team[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
  }

  onSelect(team: Team): void{
    this.favouriteTeam = team;

  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

}
