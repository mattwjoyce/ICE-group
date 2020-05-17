import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewUserStoriesComponent } from './view-user-stories/view-user-stories.component';


const routes: Routes = [
  { path: 'view-user-stories' , component: ViewUserStoriesComponent},
  { path: 'view-teams', component: ViewTeamsComponent },
  { path: 'home-page', component: HomePageComponent }
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