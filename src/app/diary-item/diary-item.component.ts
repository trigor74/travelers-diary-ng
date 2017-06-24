import { Component, Input, OnInit } from '@angular/core';
import { DiaryNote } from '../shared/models';

@Component({
  selector: 'app-diary-item',
  templateUrl: './diary-item.component.html',
  styleUrls: ['./diary-item.component.css']
})
export class DiaryItemComponent implements OnInit {
  @Input() item: DiaryNote;

  constructor() { }

  ngOnInit() {
  }

}
