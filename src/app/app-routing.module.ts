import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ViewUserStoriesComponent } from './view-user-stories/view-user-stories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewNextGamePredictionComponent } from './view-next-game-prediction/view-next-game-prediction.component';
import { ViewTeamsComponent } from './view-teams/view-teams.component';



const routes: Routes = [
  { path: 'view-user-stories' , component: ViewUserStoriesComponent},
  { path: 'home-page', component: HomePageComponent },
  { path: 'view-next-game-prediction', component: ViewNextGamePredictionComponent},
  { path: 'view-teams', component: ViewTeamsComponent }
  
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