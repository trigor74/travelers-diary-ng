import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-item',
  templateUrl: './diary-item.component.html',
  styleUrls: ['./diary-item.component.css']
})
export class DiaryItemComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
