import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../database/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  @Output() items: Observable<any>;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.items = this.data.getTravelList();
    // reverse order
    // this.items = this.data.getTravelList().map(res => {
    //   return res.reverse();
    // });
  }

  createTravel() {
    console.log('WARNING @ TravelListComponent#createTravel(): not implemented yet');
  }

}
