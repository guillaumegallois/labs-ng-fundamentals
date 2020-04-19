import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import {EventDetailsAddressComponent} from "./event-details/event-details-address.component";

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventDetailsAddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
