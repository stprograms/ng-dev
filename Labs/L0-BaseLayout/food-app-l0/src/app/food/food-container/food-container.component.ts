import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss'],
})
export class FoodContainerComponent implements OnInit {
  public foods: FoodItem[] = [];
  public current?: FoodItem;

  constructor(private fs: FoodService) {}

  /**
   * @brief Initialize the container.
   * The list of foods is read by through the FoodService
   */
  ngOnInit(): void {
    this.fs.getFoods().subscribe((data) => {
      this.foods = data;
    });
  }

  /**
   * @brief a food has been selected from the list
   * @param food selected food from the list
   */
  public onFoodSelected(food : FoodItem) {
    console.log("Food " + food.name + " has been selected");
    this.current = {...food};
  }

  public onFoodSaved(f : FoodItem) {
    console.log('Saving to service', f);
    const existingEntry: FoodItem | undefined = this.foods.find( i => i.id == f.id);
    if (existingEntry) {
      // update existing
      Object.assign(existingEntry, f);
    } else {
      // Create new
      this.foods.push(f);
    }
  }
}
