import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit, OnChanges {
  constructor() {}

  @Input()
  food: FoodItem[] = [];
  @Output()
  foodSelected: EventEmitter<FoodItem> = new EventEmitter();
  @Output()
  foodDeleted: EventEmitter<FoodItem> = new EventEmitter();

  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'calories',
    'editItem',
    'deleteItem',
  ];
  dataSource = new MatTableDataSource([]);

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(changes['food'].currentValue);
  }

  selectFood(f: FoodItem) {
    this.foodSelected.emit(f);
  }

  deleteFood(f: FoodItem) {
    this.foodDeleted.emit(f);
  }
}
