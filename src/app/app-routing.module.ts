import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FiltersComponent} from './filters/filters.component';
import { CalendarUserviewComponent } from './calendar-userview/calendar-userview.component';
import { CalendarAssoviewComponent } from './calendar-assoview/calendar-assoview.component';

const routes: Routes = [
  { path: 'filtres', component: FiltersComponent },
  { path: 'calendar-userview', component: CalendarUserviewComponent},
  { path: 'calendar-assoview', component: CalendarAssoviewComponent},
  { path: '', redirectTo: '/calendar-assoview',  pathMatch: 'full'}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
