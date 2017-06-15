import { Component, Input, OnInit } from '@angular/core';
import { Travel } from '../shared/models';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.css']
})
export class TravelItemComponent implements OnInit {
  @Input() item: Travel;

  constructor() { }

  ngOnInit() {
  }

  edit(item: any) {
    console.log('WARNING @ TravelItemComponent#edit(): not implemented yet', item);
  }

  delete(item: any) {
    console.log('WARNING @ TravelItemComponent#delete(): not implemented yet', item);
  }

}

