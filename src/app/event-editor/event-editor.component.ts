import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent {
  eventForm = new FormGroup({
    id: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
    title: new FormControl()
    });
}
