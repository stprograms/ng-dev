import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})
export class FoodEditComponent {
  @Input() food: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, Validators.min(1)],
      calories: 0,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['food']) {
      console.log('receiving food', changes['food'].currentValue);
      this.form.setValue(changes['food'].currentValue);
    }
  }

  saveForm(form: any) {
    console.log('food to save', form.value);
    this.saveFood.emit(form.value);
  }
}
