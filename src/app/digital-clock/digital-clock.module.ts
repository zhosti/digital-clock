import {NgModule} from '@angular/core';
import { DigitalClockComponent } from './digital-clock.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AngularDigitalClockModule } from 'angular-digital-clock';
import { TimeFormatDropdownComponent } from './time-format-dropdown/time-format-dropdown.component';

@NgModule({
	declarations: [
        DigitalClockComponent,
        TimeFormatDropdownComponent,
    ],
	imports: [
        CommonModule,
        FormsModule,
        AngularDigitalClockModule
	],
	exports: [DigitalClockComponent],
	providers: [],
})
export class DigitalClockModule {}
