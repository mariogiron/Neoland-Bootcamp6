import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CronoComponent } from './crono/crono.component';
import { SumaComponent } from './suma/suma.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    CronoComponent,
    SumaComponent,
    CalculadoraComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
