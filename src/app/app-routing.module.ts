import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { HireComponent } from './hire/hire.component';
import { LibraryComponent } from './library/library.component';
import { MetaSkillsComponent } from './meta-skills/meta-skills.component';
import { PeopleComponent } from './people/people.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamBuildingComponent } from './team-building/team-building.component';

const routes: Routes = [
  {path:'people',component:PeopleComponent},
  {path:'team-building',component:TeamBuildingComponent},
  {path:'productivity',component:ProductivityComponent},
  {path:'health-check',component:HealthCheckComponent},
  {path:'hire',component:HireComponent},
  {path:'library',component:LibraryComponent},
  {path:'settings',component:SettingsComponent},
  {path:'admin',component:AdminComponent},
  {path:'meta-skills',component:MetaSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
