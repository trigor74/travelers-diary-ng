import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css']
})
export class DiaryListComponent implements OnInit {
  @Input() travelId = '';

  constructor() { }

  ngOnInit() {
  }

}
