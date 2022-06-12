import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Single Page Application Development';
  subtitle = 'Typescript';
  pic = 'user-interface.jpg';

  constructor() {}

  ngOnInit() {}
}
