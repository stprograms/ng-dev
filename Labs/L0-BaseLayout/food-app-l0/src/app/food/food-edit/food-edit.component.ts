import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem } from '../food-item';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  constructor() { }

  @Input() food?: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();


  ngOnInit(): void {
    console.log(this.food);
  }

  doSave() {
    this.saveFood.emit(this.food);
  }

}
