import { Component, Input, OnInit } from '@angular/core';
import { Travel } from '../shared/models';

@Component({
  selector: 'app-travel-info',
  templateUrl: './travel-info.component.html',
  styleUrls: ['./travel-info.component.css']
})
export class TravelInfoComponent implements OnInit {
  @Input() travel: Travel;

  constructor() { }

  ngOnInit() {
  }

}
