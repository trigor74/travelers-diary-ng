import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs/Observable';
import { DiaryNote, ReminderItem, Travel } from '../shared/models';

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
  }

  getTravel(travelId: string): Observable<Travel> {
    return this.db.object('/users/' + this.authService.uid + '/travels/' + travelId);
  }

  getTravelList(): Observable<Travel[]> {
    return this.db.list('/users/' + this.authService.uid + '/travels', {
      query: {
        orderByChild: 'creationTime',
        startAt: 0
      }
    });
  }

  getDiaryList(travelId: string = ''): Observable<DiaryNote[]> {
    if (travelId) {
      return this.db.list('/users/' + this.authService.uid + '/diary', {
        query: {
          orderByChild: 'travelId',
          equalTo: travelId
        }
      });
    } else {
      return this.db.list('/users/' + this.authService.uid + '/diary', {
        query: {
          orderByChild: 'time'
        }
      });
    }
  }

  getReminderList(travelId: string = ''): Observable<ReminderItem[]> {
    if (travelId) {
      return this.db.list('/users/' + this.authService.uid + '/reminder', {
        query: {
          orderByChild: 'travelId',
          equalTo: travelId
        }
      });
    } else {
      return this.db.list('/users/' + this.authService.uid + '/reminder', {
        query: {
          orderByKey: true
        }
      });
    }
  }


}
