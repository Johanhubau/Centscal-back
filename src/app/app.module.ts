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
import { EventService } from './services/event.service';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthenticationService} from './services/authentication.service';
import { EventDisplayComponent } from './event-display/event-display.component';
import { AuthGuard } from './auth.guard';
import {AuthTokenInterceptor} from './auth.token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    CalendarComponent,
    EventEditorComponent,
    LoginComponent,
    EventDisplayComponent
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
    AuthenticationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
