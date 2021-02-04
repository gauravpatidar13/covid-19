import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TeamBuildingComponent } from './team-building/team-building.component';
import { PeopleComponent } from './people/people.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { HireComponent } from './hire/hire.component';
import { LibraryComponent } from './library/library.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin/admin.component';
import { MetaSkillsComponent } from './meta-skills/meta-skills.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ChartAComponent } from './chart-a/chart-a.component';
import { ChartBComponent } from './chart-b/chart-b.component';
import { ChartCComponent } from './chart-c/chart-c.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamBuildingComponent,
    PeopleComponent,
    ProductivityComponent,
    HealthCheckComponent,
    HireComponent,
    LibraryComponent,
    SettingsComponent,
    AdminComponent,
    MetaSkillsComponent,
    ChartAComponent,
    ChartBComponent,
    ChartCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    PerfectScrollbarModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
