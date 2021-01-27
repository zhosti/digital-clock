import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { FormsModule } from '@angular/forms';
import { DigitBoxComponent } from './digital-clock/digit-box/digit-box.component';
import { TimeFormatDropdownComponent } from './digital-clock/time-format-dropdown/time-format-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    TimeFormatPipe,
    DigitBoxComponent,
    TimeFormatDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TimeFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
