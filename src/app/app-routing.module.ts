import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SmoothieComponent } from './smoothie/smoothie.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent,
  },
  { path: '', redirectTo: '/smoothie', pathMatch: 'full' },
  {
    path: 'smoothie',
    component: SmoothieComponent,
  },
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  {
    path: 'header',
    component: AppHeaderComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }