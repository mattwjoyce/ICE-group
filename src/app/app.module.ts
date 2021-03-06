import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { DataServiceService } from './data-service.service';
import { AppComponent } from './app.component';
import { ViewUserStoriesComponent } from './view-user-stories/view-user-stories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewNextGamePredictionComponent } from './view-next-game-prediction/view-next-game-prediction.component';
import { ViewTeamSeasonResultsComponent } from './view-team-season-results/view-team-season-results.component';
import { ViewNextFiveGamesComponent } from './view-next-five-games/view-next-five-games.component';
import { ViewVenuesWonComponent } from './view-venues-won/view-venues-won.component';
import { ViewRivalGamesComponent } from './view-rival-games/view-rival-games.component';
import { ViewPointDiffComponent } from './view-point-diff/view-point-diff.component';
import { FavouriteTeamService } from './favourite-team.service';
import { ViewFavTeamMaxComponent } from './view-fav-team-max/view-fav-team-max.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewUserStoriesComponent,
    ViewNextGamePredictionComponent,
    ViewTeamSeasonResultsComponent,
    ViewNextFiveGamesComponent,
    ViewVenuesWonComponent,
    ViewRivalGamesComponent,
    ViewPointDiffComponent,
    ViewFavTeamMaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService, FavouriteTeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
