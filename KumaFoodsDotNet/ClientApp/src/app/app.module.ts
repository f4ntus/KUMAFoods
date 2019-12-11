import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { PrivacyStatementComponent } from './privacyStatement/privacyStatement.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DetailPageComponent } from './detailPage/detailPage.component';

const RouteHome: Routes = [
   { path: 'mainPage', component: MainPageComponent },
   { path: 'impressum', component: ImpressumComponent },
   { path: 'datenschutz', component: PrivacyStatementComponent },
   { path: 'detailPage/:id', component: DetailPageComponent },
   { path: '**', component: MainPageComponent}
];
// JOSC.Start own Model
import { ModelModule } from './models/model.modul';


@NgModule({
   declarations: [
      AppComponent,
      MainPageComponent,
      PrivacyStatementComponent,
      ImpressumComponent,
      DetailPageComponent,
      PrivacyStatementComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ModelModule,
      // JOOSC.StartownModel\nFormsModule
      RouterModule.forRoot(RouteHome)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
