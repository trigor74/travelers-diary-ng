import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.css']
})
export class TravelItemComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

  edit(item: any) {

  }

}

// export class Travel {
//   creationTime: number;
//   start: number;
//   stop: number;
//   title: string;
//   description: string;
//   active: boolean;
//   picasaAlbumId: string;
//   defaultCover: string;
//   userCover: string;
// }
