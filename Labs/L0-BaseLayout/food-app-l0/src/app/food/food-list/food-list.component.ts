import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    SimpleChanges,
    OnChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FoodItem } from '../foodItem';

@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit, OnChanges {
    @Input() foods: FoodItem[] = [];
    @Output() selectedFood: EventEmitter<FoodItem> = new EventEmitter();
    @Output() foodToDelete: EventEmitter<FoodItem> = new EventEmitter();
    
    dataSource = new MatTableDataSource([]);
    displayColumns: string[] = ['id', 'name', 'price', 'calories', 'edit'];

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes != undefined) {
            this.dataSource = new MatTableDataSource( changes['foods'].currentValue );
            //this.foods = changes['foods'].currentValue;
        }
    }

    /**
     * @brief Select a food and emit as output
     * @param f FoodItem that has been selected
     */
    selectFood(f: FoodItem) {
        this.selectedFood.emit(f);
    }

    deleteFood(f: FoodItem) {
        this.foodToDelete.emit(f);
    }
}
