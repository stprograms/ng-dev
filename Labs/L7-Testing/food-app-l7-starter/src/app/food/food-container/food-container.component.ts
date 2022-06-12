import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss'],
})
export class FoodContainerComponent implements OnInit {
  food: FoodItem[];
  selected: FoodItem | null;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getFood().subscribe((data) => (this.food = data));
  }

  addFood() {
    this.selected = { id: 0, name: '', price: 0, calories: 0 } as FoodItem;
  }

  selectFood(f: FoodItem) {
    this.selected = { ...f };
  }

  deleteFood(f: FoodItem) {
    this.fs.deleteFood(f.id).subscribe(() => {
      let deleted = this.food.filter((item) => item.id != f.id);
      this.food = [...deleted];
    });
  }

  saveFood(f: FoodItem) {
    if (f.id) {
      this.fs.updateFood(f).subscribe((result) => {
        let existing = this.food.find((f) => f.id == result.id);
        Object.assign(existing, result);
        this.food = [...this.food];
      });
    } else {
      this.fs.addFood(f).subscribe((result) => {
        this.food.push(result);
        this.food = [...this.food];
      });
    }
  }
}
