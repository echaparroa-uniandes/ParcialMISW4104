import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlantaModule } from './planta/planta.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlantaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
