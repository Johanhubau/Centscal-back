import { Component } from '@angular/core';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { EventService } from '../services/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent {
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }


onSubmit(form: NgForm) {
  const title = form.value.title;
  const allDay = form.value.allDay;
  const startDate = moment(form.value.startDate);
  const startHour = form.value.startHour;
  const startD = startDate.add(startHour[0] + startHour[1], 'h').add(startHour[3] + startHour[4], 'm');
  const start = startD.toISOString();
  const endDate = moment(form.value.endDate);
  const endHour = form.value.endHour;
  const endD = endDate.add(endHour[0] + endHour[1], 'h').add(endHour[3] + endHour[4], 'm');
  const end = endD.toISOString();
  return this.eventService.addEvent(title, allDay, start, end);
}
}


