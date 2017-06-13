import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  uid = '';
  name = '';
  email = '';
  photoURL = '';
  edit = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.uid = this.authService.uid;
    this.name = this.authService.userInfo.displayName;
    this.email = this.authService.userInfo.email;
    this.photoURL = this.authService.userInfo.photoURL;
  }

  editMode(isEditable: boolean) {
    this.edit = isEditable;
  }

}
