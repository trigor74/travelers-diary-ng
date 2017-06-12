import { Component } from '@angular/core';
import {AuthService} from './shared/auth.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Traveler\'s Diary' ;

  constructor(public authService: AuthService,
              iconRegistry: MdIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'travel-luggage',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/travel-luggage-with-stickers.svg'));
    iconRegistry.addSvgIcon(
      'book-with-closure',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/book-with-closure.svg'));
  }

  logout() {
    this.authService.logout();
  }

}
