import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './project/first/first.component';
import { TeamsComponent } from './teams/teams.component';
import { EditsComponent } from './Blog/edits/edits.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TeamsComponent,
    EditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
