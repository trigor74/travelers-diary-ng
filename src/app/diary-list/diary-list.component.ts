import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../database/data.service';
import { DiaryNote } from '../shared/models';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css']
})
export class DiaryListComponent implements OnInit {
  @Input() travelId: string;
  @Output() items: Observable<DiaryNote[]>;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.items = this.data.getDiaryList(this.travelId);
  }

}
