import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./_guards/index";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  {
    path: 'app', component: AppComponent
  },
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AppComponent, LoginComponent]