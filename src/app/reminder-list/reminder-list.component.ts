import { Component, Input, OnInit, Output } from '@angular/core';
import { ReminderItem } from '../shared/models';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../database/data.service';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  @Input() travelId = '';
  @Output() items: Observable<ReminderItem[]>;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.items = this.data.getReminderList(this.travelId);
  }

}
