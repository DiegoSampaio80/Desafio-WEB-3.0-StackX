import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonIdiomaComponent } from './button-idioma/button-idioma.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonIdiomaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
