import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FiltersComponent} from './filters/filters.component';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
  { path: 'filtres', component: FiltersComponent },
  { path: 'calendar', component: CalendarComponent},
  { path: '', redirectTo: '/calendar',  pathMatch: 'full'}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
