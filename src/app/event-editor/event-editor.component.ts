import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import * as moment from 'moment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent {

onSubmit(form: NgForm) {
  console.log(form.value);
}
}


