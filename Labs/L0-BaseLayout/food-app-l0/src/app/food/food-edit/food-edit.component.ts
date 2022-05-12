import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem } from '../foodItem';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-food-edit',
    templateUrl: './food-edit.component.html',
    styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {
    constructor(private fb: FormBuilder) {}

    editForm: FormGroup = new FormGroup({});

    @Input() food?: FoodItem;
    @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

    ngOnInit(): void {
        console.log('Now editing: ' + this.food);

        // Configure formgroup
        this.editForm = this.fb.group({
            name: [this.food?.name, [ Validators.required, Validators.minLength(3)]],
            price: [this.food?.price, Validators.min(0)],
            calories: [this.food?.calories]
        });
    }

    public onCancel() {
        this.food = undefined;
    }

    public storeFood(f: FormGroup | undefined) {
        if (f != undefined) {
            Object.assign(this.food, f.value);
            this.saveFood.emit(this.food);
        }
    }
}
