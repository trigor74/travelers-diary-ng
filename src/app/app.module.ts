import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthGuard } from './auth.guard';
import { AuthService } from './shared/auth.service';
import { DataService } from './database/data.service';

import { firebaseConfig } from './firebaseconfig';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelItemComponent } from './travel-item/travel-item.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { TravelComponent } from './travel/travel.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryItemComponent } from './diary-item/diary-item.component';
import { DiaryNoteComponent } from './diary-note/diary-note.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderItemComponent } from './reminder-item/reminder-item.component';
import { ReminderTodoComponent } from './reminder-todo/reminder-todo.component';
import { ProfileComponent } from './profile/profile.component';
import { MembersComponent } from './members/members.component';
import { MemberItemComponent } from './member-item/member-item.component';
import { MemberInfoComponent } from './member-info/member-info.component';
import { SafeHtmlPipe } from './shared/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    TravelListComponent,
    TravelItemComponent,
    TravelInfoComponent,
    TravelComponent,
    DiaryListComponent,
    DiaryItemComponent,
    DiaryNoteComponent,
    ReminderListComponent,
    ReminderItemComponent,
    ReminderTodoComponent,
    ProfileComponent,
    MembersComponent,
    MemberItemComponent,
    MemberInfoComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    routes,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AngularFireDatabase,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
