import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Team } from './team';
import { FavouriteTeamService } from './favourite-team.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Team Explorer Pro';
  
  favouriteTeam:Team; 
  teams:Team[];

  constructor(private dataService: DataServiceService, private FavouriteTeamService:FavouriteTeamService) { }


  ngOnInit() {
    this.getAFLTeams();
  // data for other components 
    this.FavouriteTeamService.getFavouriteTeam().subscribe(team => this.favouriteTeam = team);
  }

  onSelect(team: Team): void{
    this.favouriteTeam = team;
    this.FavouriteTeamService.setFavouriteTeam(this.favouriteTeam); 
  }



  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

}
