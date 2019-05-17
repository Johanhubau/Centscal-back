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
import { EventService } from './event.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService} from './authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    CalendarComponent,
    EventEditorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    AmazingTimePickerModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
