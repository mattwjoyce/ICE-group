import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent implements OnInit {

  teams:Team[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

}


