import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

import { AuthService } from './shared/auth.service';

import { firebaseConfig } from './firebaseconfig';
import { TravelsComponent } from './travels/travels.component';
import { TravelItemComponent } from './travel-item/travel-item.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { TravelComponent } from './travel/travel.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryItemComponent } from './diary-item/diary-item.component';
import { DiaryNoteComponent } from './diary-note/diary-note.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ReminderItemComponent } from './reminder-item/reminder-item.component';
import { ReminderTodoComponent } from './reminder-todo/reminder-todo.component';
import { ProfileComponent } from './profile/profile.component';
import { MembersComponent } from './members/members.component';
import { MemberItemComponent } from './member-item/member-item.component';
import { MemberInfoComponent } from './member-info/member-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    TravelsComponent,
    TravelItemComponent,
    TravelInfoComponent,
    TravelComponent,
    DiaryComponent,
    DiaryItemComponent,
    DiaryNoteComponent,
    ReminderComponent,
    ReminderItemComponent,
    ReminderTodoComponent,
    ProfileComponent,
    MembersComponent,
    MemberItemComponent,
    MemberInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'members', component: MembersComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'travels', component: TravelsComponent},
      {path: 'diary', component: DiaryComponent},
      {path: 'reminder', component: ReminderComponent},
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: '**', component: HomeComponent}
    ]),
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
