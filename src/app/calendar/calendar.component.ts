import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventService } from '../event.service';
import frLocale from '@fullcalendar/core/locales/fr';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  events = [ ];
  locale = frLocale;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events.push(
      {
        title: 'Long Event',
        description: 'description for Long Event',
        start: '2019-05-12',
        end: '2019-05-16'
      });
    console.log(this.events);
    this.events = this.eventService.events;
  }


  }


