import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';


const routes: Routes = [
  {path: 'cars', component: CarListComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: CarDetailComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
