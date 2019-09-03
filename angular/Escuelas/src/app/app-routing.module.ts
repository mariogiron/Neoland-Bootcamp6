import { RegistroComponent } from './registro/registro.component';
import { FormularioEstudiantesComponent } from './estudiantes/formulario-estudiantes/formulario-estudiantes.component';
import { ListaEstudiantesComponent } from './estudiantes/lista-estudiantes/lista-estudiantes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'main/students', component: ListaEstudiantesComponent },
  { path: 'main/students/new', component: FormularioEstudiantesComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
