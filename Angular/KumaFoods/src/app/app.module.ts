import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { DatenschutzerklärungComponent } from './datenschutzerklärung/datenschutzerklärung.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DetailPageComponent } from './detailPage/detailPage.component';

const RouteHome: Routes = [
   { path: 'mainPage', component: MainPageComponent },
   { path: 'impressum', component: ImpressumComponent },
   { path: 'datenschutzerklärung', component: DatenschutzerklärungComponent },
   { path: 'detailPage/:id', component: DetailPageComponent },
   { path: '**', component: MainPageComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      MainPageComponent,
      DatenschutzerklärungComponent,
      ImpressumComponent,
      DetailPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      RouterModule.forRoot(RouteHome)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
