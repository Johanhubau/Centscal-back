import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {NgForm} from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent {
  constructor(private eventService: EventService) {
  }

onSubmit(form: NgForm) {
  const title = form.value.title;
  const place = form.value.place;
  const startDate = moment(form.value.startDate);
  const startHour = form.value.startHour;
  const startD = startDate.add(startHour[0] + startHour[1], 'h').add(startHour[3] + startHour[4], 'm');
  const start = startD.toISOString();
  const endDate = moment(form.value.endDate);
  const endHour = form.value.endHour;
  const endD = endDate.add(endHour[0] + endHour[1], 'h').add(endHour[3] + endHour[4], 'm');
  const end = endD.toISOString();
  this.eventService.addEvent(title, place, start, end) ;
}
}


