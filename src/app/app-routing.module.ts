import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { ViewUserStoriesComponent } from './view-user-stories/view-user-stories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewNextGamePredictionComponent } from './view-next-game-prediction/view-next-game-prediction.component';
import { ViewTeamSeasonResultsComponent } from './view-team-season-results/view-team-season-results.component';
import { ViewNextFiveGamesComponent } from './view-next-five-games/view-next-five-games.component';
import { ViewVenuesWonComponent } from './view-venues-won/view-venues-won.component';
import { ViewRivalGamesComponent } from './view-rival-games/view-rival-games.component';
import { ViewPointDiffComponent } from './view-point-diff/view-point-diff.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  //remove view-teams path if not being used
  { path: 'view-teams', component: ViewTeamsComponent },
  { path: 'view-user-stories' , component: ViewUserStoriesComponent},
  { path: 'home-page', component: HomePageComponent },
  { path: 'view-next-game-prediction', component: ViewNextGamePredictionComponent},
  { path: 'view-team-season-results', component: ViewTeamSeasonResultsComponent },
  { path: 'view-next-five-games', component: ViewNextFiveGamesComponent },
  { path: 'view-venues-won', component: ViewVenuesWonComponent},
  { path: 'view-rival-games', component: ViewRivalGamesComponent},
  { path: 'view-point-diff', component: ViewPointDiffComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }