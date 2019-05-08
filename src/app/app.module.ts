import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FiltersComponent } from './filters/filters.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { AmazingTimePickerModule } from './atp-library/atp-time-picker.module';
@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    CalendarComponent,
    EventEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    AmazingTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
