import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../foodItem';
import { FoodService } from '../food.service';

@Component({
    selector: 'app-food-container',
    templateUrl: './food-container.component.html',
    styleUrls: ['./food-container.component.scss']
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
    public onFoodSelected(food: FoodItem) {
        console.log('Food ' + food.name + ' has been selected');
        this.current = { ...food };
    }

    public onNewFood() {
        console.log('Creating new food');
        this.current = { id: 0, name: '', calories: 0, price: 0 };
    }

    public onFoodSaved(f: FoodItem) {
        console.log('Saving to service', f);
        const existingEntry: FoodItem | undefined = this.foods.find(
            (i) => i.id == f.id
        );
        if (existingEntry) {
            // update existing
            Object.assign(existingEntry, f);

            this.fs.updateFood(f).subscribe((data) => {
                if (data.status === 200) {
                    console.log('Update successful');

                    // Update the list
                    this.foods = [...this.foods];

                    // reset current
                    this.current = undefined;
                }
            });
        } else {
            // Create new
            this.fs.createFood(f).subscribe((data) => {
                console.log(data);

                // Check the response of the request
                if (data.status === 201) {
                    let newFood: FoodItem = data.body;

                    // push to array
                    this.foods.push(newFood);

                    // Update the list
                    this.foods = [...this.foods];

                    // reset current
                    this.current = undefined;
                }
            });
        }
    }

    public onFoodDelete(f : FoodItem) {
        if (f == undefined || f.id == 0) {
            console.error("Invalid FoodItem");
            return;
        }

        // Send delete request to service
        this.fs.deleteFood(f).subscribe( (data) => {
            if (data.status === 200) {
                console.log("Delete successful");
                
                const i = this.foods.indexOf(f);
                if (i != -1) {
                    this.foods.splice(i,1);
                }

                // Update the list
                this.foods = [...this.foods];
            }
        });
    }
}
