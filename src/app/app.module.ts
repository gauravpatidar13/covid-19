import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Header1Component } from './header1/header1.component';
import { PreventionComponent } from './prevention/prevention.component';
import { PreventComponent } from './prevent/prevent.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { ConsultComponent } from './consult/consult.component';
import { HandWashComponent } from './hand-wash/hand-wash.component';
import { Footer1Component } from './footer1/footer1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Header1Component,
    PreventionComponent,
    PreventComponent,
    SymptomsComponent,
    PrecautionsComponent,
    ConsultComponent,
    HandWashComponent,
    Footer1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
