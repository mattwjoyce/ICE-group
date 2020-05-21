import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Game } from '../game';

@Component({
  selector: 'app-view-next-five-games',
  templateUrl: './view-next-five-games.component.html',
  styleUrls: ['./view-next-five-games.component.css']
})
export class ViewNextFiveGamesComponent implements OnInit {

  nextFiveGames:Game[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getNextFiveGames();
  }

  getNextFiveGames(): void{
    this.dataService.get2019Games().subscribe(temp => {

      var tempArr = [];

      // loop through array of 2019 games, find games with favourite team and round 20 onwards
      temp.forEach(element => {
        if((element.hteam == 'Carlton' || element.ateam == 'Carlton') && element.round > 19) tempArr.push(element);
      });

      this.nextFiveGames = tempArr;
    });
  }

}
