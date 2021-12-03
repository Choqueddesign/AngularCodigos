import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VoidComponent } from './components/void/void.component';


//se guardan las rutas de los componentes
const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"dashboard", component: DashboardComponent },
  {path:"**", component: VoidComponent },//todo lo que tenga algo que no existe manda a ese componente (**)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
