import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from './screens/home/home.component';
import { StationComponent } from "./components/station/station.component";
import {StationPreviewComponent } from "./screens/station-preview/station-preview.component";
import {AppRoutingModule} from "./app-routing.module";
import {AppService} from "../services/app.service";
import { AgentsComponent } from './agents/agents.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, StationComponent, StationPreviewComponent, AgentsComponent],
  imports: [BrowserModule, RouterOutlet, AppRoutingModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
