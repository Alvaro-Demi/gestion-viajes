import { Routes } from '@angular/router';
import { MisViajesComponent } from './components/mis-viajes/mis-viajes.component';
import { NuevoViajeComponent } from './components/nuevo-viaje/nuevo-viaje.component';

export const routes: Routes = [
  { path: '', redirectTo: '/mis-viajes', pathMatch: 'full' },
  { path: 'mis-viajes', component: MisViajesComponent },
  { path: 'nuevo-viaje', component: NuevoViajeComponent }
];
