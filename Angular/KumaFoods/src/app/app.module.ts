import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTitlebarComponent } from './navTitlebar/navTitlebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './mainPage/mainPage.component';

@NgModule({
   declarations: [
      AppComponent,
      NavTitlebarComponent,
      FooterComponent,
      MainPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
