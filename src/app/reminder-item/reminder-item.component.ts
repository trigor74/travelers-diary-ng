import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-item',
  templateUrl: './reminder-item.component.html',
  styleUrls: ['./reminder-item.component.css']
})
export class ReminderItemComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
