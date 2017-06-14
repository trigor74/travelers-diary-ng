import { Component, OnInit, Output } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  @Output() items: FirebaseListObservable<any>;
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

}

// https://resplendent-torch-7243.firebaseio.com/users/:uid/travels
// query = mFirebaseRef.orderByChild("creationTime ").startAt(0);
