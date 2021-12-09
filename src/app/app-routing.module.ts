import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FirstComponent } from './project/first/first.component';
import { IndexProjectComponent } from './project/index-project/index-project.component';
import { TeamsComponent } from './Team/teams/teams.component';

const routes: Routes = [


{path:'',component:HomeComponent},
{path:'product',component:ProductComponent},
{path:'Team',component:TeamsComponent},
{path:'project',component:FirstComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
