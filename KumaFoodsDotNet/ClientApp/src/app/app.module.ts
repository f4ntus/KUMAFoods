import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './Login/Login/Login.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { PrivacyStatementComponent } from './privacyStatement/privacyStatement.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DetailPageComponent } from './detailPage/detailPage.component';
// JOSC.Start own Model
import { ModelModule } from './models/model.modul';

const RouteHome: Routes = [
   { path: 'mainPage', component: MainPageComponent },
   { path: 'impressum', component: ImpressumComponent },
   { path: 'privacyStatement', component: PrivacyStatementComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent },
   { path: 'detailPage/:foodName', component: DetailPageComponent },
   { path: '**', component: MainPageComponent}
];



@NgModule({
   declarations: [
      AppComponent,
      MainPageComponent,
      PrivacyStatementComponent,
      ImpressumComponent,
      DetailPageComponent,
      PrivacyStatementComponent,
      LoginComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ModelModule,
      HttpClientModule,
      // JOOSC.StartownModel\nFormsModule
      RouterModule.forRoot(RouteHome)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
