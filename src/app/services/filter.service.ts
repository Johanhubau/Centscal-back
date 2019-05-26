import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AppGlobal} from '../app.global';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient, private appGlobal: AppGlobal) { }

  getAsso() {
    return this.http.get(`${this.appGlobal.baseAPIUrl}api/associations`)
      .pipe(map( (res) => console.log(res)));
  }
}
