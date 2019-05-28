import { Component, OnInit } from '@angular/core';
import {FilterService} from '../services/filter.service';
import {Asso} from '../asso';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  AssoList = [ {value: 1, name: 'BDE'}, {value: 2, name: 'BDA'}];


  constructor(private filterService: FilterService) {
  }

  ngOnInit() {
  }

  showAssoList(list: string[]) {
    // @ts-ignore
    this.filterService.getAsso();
    // .map(({name}) => name)}
  }
}



