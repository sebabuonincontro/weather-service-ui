import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {BoardComponent} from "./board/board.component";
import {BoardService} from "./services/board.service";
import {
  MaterialModule, MdButtonModule, MdCardModule, MdDialogModule, MdIconModule,
  MdInputModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LocationComponent} from "./location/location.component";
import {LocationService} from "./services/location.service";
import {AppRoutingModule} from "app/app.routing";

@NgModule({
  declarations: [
    AppComponent, BoardComponent, LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdIconModule,
    MdDialogModule
  ],
  exports: [
    RouterModule
  ],
  providers: [BoardService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
