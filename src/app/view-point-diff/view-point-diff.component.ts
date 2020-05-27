import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Game } from '../game';

@Component({
  selector: 'app-view-point-diff',
  templateUrl: './view-point-diff.component.html',
  styleUrls: ['./view-point-diff.component.css']
})
export class ViewPointDiffComponent implements OnInit {

  completedGames:Game[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getCompletedGames();
  }

  getCompletedGames(): void {
    this.dataService.get2019Games().subscribe(temp => { 
      var tempArr = [];

      // loop through array of 2019 games, find games before round 20 and sort by point differential
      temp.forEach(element => {
        if(element.round < 20) tempArr.push(element);
      });

      this.completedGames = tempArr.sort(this.sortGamesByPointDiff);      

    });
  }

  
  sortGamesByPointDiff(a, b) {
    var gameAdiff = 0;
    var gameBdiff = 0;
    // calculate difference in game A
    if (a.ascore > a.hscore) {
      gameAdiff = a.ascore - a.hscore;
    } else {
      gameAdiff = a.hscore - a.ascore;
    }

    // calculate difference in game B
    if (b.ascore > b.hscore) {
      gameBdiff = b.ascore - b.hscore;
    } else {
      gameBdiff = b.hscore - b.ascore;
    }
        
    let compare = 0;

    // sort games by difference calculated earlier
    if(gameAdiff < gameBdiff) {
      compare = 1;
    } else if (gameAdiff > gameBdiff) {
      compare = -1;
    }

    return compare;
  } 


}
