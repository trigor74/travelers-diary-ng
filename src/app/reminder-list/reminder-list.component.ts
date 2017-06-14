import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  @Input() travelId = '';

  constructor() { }

  ngOnInit() {
  }

}
