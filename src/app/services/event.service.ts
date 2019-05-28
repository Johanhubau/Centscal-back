import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppGlobal } from '../app.global';
import {EventCal} from '../event';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EventService {
  events = [ ];
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoder') };
  constructor(private http: HttpClient, private appGlobal: AppGlobal) { }
  static extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  addEvent(title: string, allDay: boolean, asso_id: number, start: string, end: string) {
    const eventObject = {
      title: '',
      allDay: false,
      asso_id,
      start: '',
      source: 'null',
      end: ''
    };
    eventObject.title = title;
    eventObject.start = start;
    eventObject.end =  end;
    console.log(eventObject);
    return this.http.post(`${this.appGlobal.baseAPIUrl}api/events`, {eventObject}, this.options)
      .subscribe(EventService.extractData);
  }

  getEvent(events: any[]) {
    console.log(this.appGlobal.start);
    return this.http.get(`${this.appGlobal.baseAPIUrl}api/events?start=${this.appGlobal.startD}&end=${this.appGlobal.endD}`)
      .subscribe((eventArray: any[]) => {
        console.log(eventArray);
        for (const x of eventArray) {
          events.push(x);
        }
      });
  }

  deleteEvent(event: Event) {
   // return this.http.delete();
  }
}

