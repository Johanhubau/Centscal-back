import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  events = [];
  constructor(private http: HttpClient) { }
  addEvent(title: string, place: string, start: string, end: string) {
    const eventObject = {
      title: '',
      description: '',
      start: '',
      end: ''
    };
    eventObject.title = title;
    eventObject.description = place;
    eventObject.start = start;
    eventObject.end =  end;
    this.events.push(eventObject);
    this.http.post<any>(`${JSON.stringify(URL)}/api/events`, eventObject);
  }
}

