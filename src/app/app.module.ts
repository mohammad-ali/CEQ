import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './project/first/first.component';
import { TeamsComponent } from './Team/teams/teams.component';
import { EditsComponent } from './Blog/edits/edits.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { SecondComponent } from './project/second/second.component';


import { ContactComponent } from './contact/contact.component';
import { IndxTeamComponent } from './Team/indx-team/indx-team.component';
import { IndexProjectComponent } from './project/index-project/index-project.component';
import { IndexNewsComponent } from './News/index-news/index-news.component';

import { IndexServiceComponent } from './index-service/index-service.component';
import { MainIndexComponent } from './main-index/main-index.component';
import { HomeComponent } from './home/home.component';
import { FirstTeamComponent } from './Team/first-team/first-team.component';
import { TopNavComponent } from './top-nav/top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TeamsComponent,
    EditsComponent,
    ProductComponent,
    AboutUsComponent,
    FaqComponent,
    FooterComponent,
    SecondComponent,
    
   
    ContactComponent,
    IndxTeamComponent,
    IndexProjectComponent,
    IndexNewsComponent,
  
    IndexServiceComponent,
       MainIndexComponent,
       HomeComponent,
       FirstTeamComponent,
       TopNavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
