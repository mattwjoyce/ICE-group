import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { Tip } from '../tip';

@Component({
  selector: 'app-view-next-game-prediction',
  templateUrl: './view-next-game-prediction.component.html',
  styleUrls: ['./view-next-game-prediction.component.css']
})
export class ViewNextGamePredictionComponent implements OnInit {

  tips:Tip[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getTips();
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp;});
  }

}
