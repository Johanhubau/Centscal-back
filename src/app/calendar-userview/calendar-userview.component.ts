import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar-userview',
  templateUrl: './calendar-userview.component.html',
  styleUrls: ['./calendar-userview.component.css']
})
export class CalendarUserviewComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  constructor() { }

  ngOnInit() {
  }

}
