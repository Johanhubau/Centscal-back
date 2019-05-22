import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventService } from '../services/event.service';
import frLocale from '@fullcalendar/core/locales/fr';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {EventDisplayComponent} from '../event-display/event-display.component';
import { map } from 'rxjs/operators';
import {EventCal} from '../event';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  events = 'http://127.0.0.1:8000/api/events?start=${this.appGlobal.startD}&end=${this.appGlobal.endD}';
  locale = frLocale;
  constructor(private eventService: EventService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

eventClick() {
  this.bottomSheet.open(EventDisplayComponent);
  }
}



