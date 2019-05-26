import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  title: any;
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }
  deleteEvent(event: Event) {
   return this.eventService.deleteEvent(event);
  }
}
