import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FiltersComponent} from './filters/filters.component';
import {CalendarComponent} from './calendar/calendar.component';
import {EventEditorComponent} from './event-editor/event-editor.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';

// @ts-ignore
const routes: Routes = [
  { path: 'filtres', component: FiltersComponent },
  { path: 'calendar', component: CalendarComponent},
  { path: 'login', component: LoginComponent },
  { path: 'event-editor', component: EventEditorComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/calendar',  pathMatch: 'full'}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
