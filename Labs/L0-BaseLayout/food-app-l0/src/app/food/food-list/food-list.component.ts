import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FoodItem } from '../foodItem';

@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
    @Input() foods: FoodItem[] = [];
    @Output() selectedFood: EventEmitter<FoodItem> = new EventEmitter();
    displayColumns: string[] = ['id', 'name', 'price', 'calories', 'edit'];

    constructor() {}

    ngOnInit(): void {}

    /**
     * @brief Select a food and emit as output
     * @param f FoodItem that has been selected
     */
    selectFood(f: FoodItem) {
        this.selectedFood.emit(f);
    }
}
