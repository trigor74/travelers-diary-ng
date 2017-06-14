import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  items: FirebaseListObservable<any>;
  uid = '';

  constructor(db: AngularFireDatabase, private authService: AuthService) {
    this.uid = this.authService.uid;
    this.items = db.list('/users/' + this.uid + '/travels', {
      query: {
        orderByChild: 'creationTime',
        startAt: 0
      }
    });
  }

  ngOnInit() {
  }

  edit(item: any) {

  }

}

// class Travel {
//   creationTime: number;
//   start: number;
//   stop: number;
//   title: string;
//   description: string;
//   active: boolean;
//   picasaAlbumId: string;
//   defaultCover: string;
//   userCover: string;
// }

// https://resplendent-torch-7243.firebaseio.com/users/:uid/travels
// query = mFirebaseRef.orderByChild("creationTime ").startAt(0);
