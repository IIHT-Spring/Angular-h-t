import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
    {path:'about', component: AboutComponent},
    {path:'userform', component: UserformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [UserformComponent, AboutComponent];
