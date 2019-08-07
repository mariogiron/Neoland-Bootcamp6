import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { CronoComponent } from './crono/crono.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    RespuestasComponent,
    CronoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
