import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  title = 'About Templated Components';
  theValue = 'Hello World';

  constructor() {}

  ngOnInit() {}
}
