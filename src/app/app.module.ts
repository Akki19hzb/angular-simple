import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopulationService } from "./population/population.service";
import { AuthGuard } from "./_guards/index";


@NgModule({
  declarations: [

    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,AuthGuard, PopulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
