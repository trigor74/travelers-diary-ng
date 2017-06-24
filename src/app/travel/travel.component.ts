import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../database/data.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  @Output() travelId: string;
  @Output() travel: Observable<any>;
  selectedIndex: number = 0;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.travelId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.travel = this.data.getTravel(this.travelId);
  }

  changeSelectedIndex(event) {
    this.selectedIndex = event.index;
  }

  createDiaryNote() {
    console.log('WARNING @ TravelComponent#createDiaryNote(): not implemented yet');
  }

  createReminderItem() {
    console.log('WARNING @ TravelComponent#createReminderItem(): not implemented yet');
  }
}

// DIARY
// diary list - DiaryListComponent with travel_id

// REMINDER
// reminder list - ReminderListComponent with travel_id

// MAP
// MapComponent with travel_id
