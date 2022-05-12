import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class CSSBindingComponent implements OnInit {
  addClass = true;
  addStyle = true;
  anotherProperty = true;

  constructor() {}

  ngOnInit() {}

  toggleBinding() {
    this.addClass = !this.addClass;
  }

  setClasses() {
    const classes = {
      thirdClass: this.addClass,
      anotherClass: this.anotherProperty,
    };
    return classes;
  }

  setStyles() {
    const styles = {
      'font-style': this.addStyle ? 'italic' : 'normal',
      'font-weight': this.anotherProperty ? 'bold' : 'normal',
    };
    return styles;
  }

  toggleStyle() {
    this.addStyle = !this.addStyle;
  }
}
