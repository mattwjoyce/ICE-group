import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Game } from '../game';

@Component({
  selector: 'app-view-venues-won',
  templateUrl: './view-venues-won.component.html',
  styleUrls: ['./view-venues-won.component.css']
})
export class ViewVenuesWonComponent implements OnInit {

  venues:Game[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getVenuesWon();
  }

  getVenuesWon(): void {
    this.dataService.get2019Games().subscribe(temp => {

      var tempArr = [];

      // loop through array of 2019 games before round 20, find games where winner==favouriteTeam, store venue name in arr
      temp.forEach(element => {
        if(element.winner == 'Carlton' && element.round < 20) tempArr.push(element.venue);
      });

      // filter arr of venues for no duplicates
      this.venues = tempArr.filter((n, i) => tempArr.indexOf(n) === i);

    });
  }

}
