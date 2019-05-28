import { Component } from '@angular/core';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { EventService } from '../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {FilterService} from '../services/filter.service';
import {Asso} from '../asso';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent {
  AssoList = [ {value: 1, name: 'BDE'}, {value: 2, name: 'BDA'}];
  selectedValue: any;
  constructor(private eventService: EventService, private filterService: FilterService, private route: ActivatedRoute) {}
  showAssoList() {
    const list = [];
    this.filterService.getAsso()
      .subscribe((data: Asso[]) => {
        data.forEach(asso => {
          list.push(asso.name);
        });
        return list;

      });
  }
onSubmit(form: NgForm) {
  const title = form.value.title;
  const asso_id = form.value.selectedValue;
  const allDay = form.value.allDay;
  const startDate = moment(form.value.startDate);
  const startHour = form.value.startHour;
  const startD = startDate.add(startHour[0] + startHour[1], 'h').add(startHour[3] + startHour[4], 'm');
  const start = startD.toISOString();
  const endDate = moment(form.value.endDate);
  const endHour = form.value.endHour;
  const endD = endDate.add(endHour[0] + endHour[1], 'h').add(endHour[3] + endHour[4], 'm');
  const end = endD.toISOString();
  return this.eventService.addEvent(title, allDay, asso_id, start, end);
}
}


