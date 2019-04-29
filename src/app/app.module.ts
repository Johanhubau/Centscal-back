import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FiltersComponent } from './filters/filters.component';

import { CalendarUserviewComponent } from './calendar-userview/calendar-userview.component';
import { CalendarAssoviewComponent } from './calendar-assoview/calendar-assoview.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    CalendarUserviewComponent,
    CalendarAssoviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
