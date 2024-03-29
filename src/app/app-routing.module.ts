import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"add", component:AddComponent},
  {path:"", redirectTo:"home",pathMatch:"full"} 
  //to set home as default page, pathmatch to take the full url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
