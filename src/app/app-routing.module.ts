import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FiltersComponent} from './filters/filters.component';

const routes: Routes = [
  { path: 'filtres', component: FiltersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
