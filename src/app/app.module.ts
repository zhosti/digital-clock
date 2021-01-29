import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DigitalClockModule } from './digital-clock/digital-clock.module';
import {AngularDigitalClockModule} from 'angular-digital-clock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularDigitalClockModule,
    DigitalClockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
