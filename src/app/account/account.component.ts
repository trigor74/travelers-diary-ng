import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
