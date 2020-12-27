import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GravidaComponent } from './gravida/gravida.component';
import { JustoComponent } from './justo/justo.component';
import { PurusComponent } from './purus/purus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GravidaComponent,
    JustoComponent,
    PurusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
