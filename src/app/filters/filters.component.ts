import { Component, OnInit } from '@angular/core';
import {FilterService} from '../services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  assoList: string[];
  list: any;
  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.list = this.filterService.getAsso();
    this.assoList = this.list.name;
  }

}


