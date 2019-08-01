import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RelojComponent } from './reloj/reloj.component';
import { RelojSimpleComponent } from './reloj-simple/reloj-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    RelojComponent,
    RelojSimpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
