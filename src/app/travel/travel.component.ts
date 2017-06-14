import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  title = 'travel title here';
  @Output() travelId = '';

  constructor(private db: AngularFireDatabase, private authService: AuthService, private route: ActivatedRoute) {
    this.travelId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}

// DIARY
// diary list - DiaryListComponent with travel_id

// REMINDER
// reminder list - ReminderListComponent with travel_id

// MAP
// MapComponent with travel_id
