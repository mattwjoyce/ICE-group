import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewUserStoriesComponent } from './view-user-stories/view-user-stories.component';
import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewTeamsComponent,
    HomePageComponent,
    ViewUserStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent, ViewUserStoriesComponent]
})
export class AppModule { }
