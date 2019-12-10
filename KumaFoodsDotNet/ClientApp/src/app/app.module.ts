import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// JOSC.Start own Model
import { ModelModule } from './models/model.modul';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule // JOOSC.Start own Model
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
