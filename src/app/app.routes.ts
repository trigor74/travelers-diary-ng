import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelComponent } from './travel/travel.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';


export const router: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'travels', component: TravelListComponent, canActivate: [AuthGuard]},
  {path: 'travels/:id', component: TravelComponent, canActivate: [AuthGuard]},
  {path: 'diary', component: DiaryListComponent, canActivate: [AuthGuard]},
  {path: 'reminder', component: ReminderListComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
