import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn : 'root'
})

export class AppGlobal {
  readonly baseAPIUrl: string = 'http://127.0.0.1:8000/';
  isLoggedIn: boolean;
  now = moment();
  start = this.now.clone().subtract(3, 'M');
  end = this.now.clone().add(3, 'M');
  startD = this.start.toISOString();
  endD = this.end.toISOString();
}
