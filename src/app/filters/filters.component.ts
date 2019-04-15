import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  CalendarList: string[] = ['Asso 1', 'Asso 2', 'Asso 3', 'Asso 4', 'Asso 5'];
  constructor() { }

  ngOnInit() {
  }

}


