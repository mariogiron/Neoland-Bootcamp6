import { ListaEstudiantesComponent } from './estudiantes/lista-estudiantes/lista-estudiantes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'main/students', component: ListaEstudiantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
