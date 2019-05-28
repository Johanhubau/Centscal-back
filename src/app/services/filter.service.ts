import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AppGlobal} from '../app.global';
import {Asso} from '../asso';
import {EventService} from './event.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient, private appGlobal: AppGlobal) { }

  getAsso() {
    return this.http.get<Asso[]>(`${this.appGlobal.baseAPIUrl}api/associations`)
      .pipe(map( (res) => res));
  }
}
