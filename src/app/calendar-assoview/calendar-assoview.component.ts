import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar-assoview',
  templateUrl: './calendar-assoview.component.html',
  styleUrls: ['./calendar-assoview.component.css']
})
export class CalendarAssoviewComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  constructor() { }

  ngOnInit() {
  }

}
