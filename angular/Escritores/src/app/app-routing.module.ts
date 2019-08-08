import { DetalleEscritorComponent } from './detalle-escritor/detalle-escritor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';


const routes: Routes = [
  { path: 'escritores', component: ListaEscritoresComponent },
  { path: 'escritores/:idEscritor', component: DetalleEscritorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
