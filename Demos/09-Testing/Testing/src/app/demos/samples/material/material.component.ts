import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  value = 50;
  validated = false;
  sliderForm: UntypedFormGroup;

  constructor() {
    this.sliderForm = new UntypedFormGroup({
      slider: new UntypedFormControl(this.value, Validators.min(1)),
    });

    this.sliderForm.valueChanges.subscribe((data: any) => {
      this.value = data.slider;
    });
  }

  resetSlider() {
    this.sliderForm.controls['slider'].setValue(1);
  }
}
