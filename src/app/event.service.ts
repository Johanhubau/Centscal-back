import {Injectable, Output} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EventService {
  events = [];
  constructor() { }
  addEvent(title: string, place: string, start: string, end: string) {
    const eventObject = {
      title: '',
      place: '',
      start: '',
      end: ''
    };
    eventObject.title = title;
    eventObject.place = place;
    eventObject.start = start;
    eventObject.end =  end;
    this.events.push(eventObject);
  }
}

