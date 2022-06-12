import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() img: string;

  constructor() {}

  ngOnInit(): void {}
}
