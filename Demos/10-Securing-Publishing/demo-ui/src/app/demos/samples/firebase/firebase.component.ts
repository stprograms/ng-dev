import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseAuthService } from '../../../fbauth/firebase/firebase-auth.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
})
export class FirebaseComponent implements OnInit {
  constructor(private httpClient: HttpClient, public as: FirebaseAuthService) {}

  currentUser: firebase.default.User | null;

  resp: any;

  ngOnInit() {
    this.as.User.subscribe((user) => {
      this.currentUser = user;
    });
  }

  callCoreApi() {
    this.resp = null;
    this.httpClient.get('https://localhost:5001/api/demo').subscribe(
      (data) => {
        this.resp = data;
      },
      (err) => {
        console.log('service call err:', err);
        this.resp = err;
      }
    );
  }

  logOut() {
    this.as.logOff();
  }
}
