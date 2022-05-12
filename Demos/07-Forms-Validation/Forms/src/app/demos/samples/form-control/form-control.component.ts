import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  constructor() {}

  name = new FormControl('Giro', [
    Validators.required,
    Validators.minLength(3),
  ]);
  postal = new FormControl('3544');
  city = new FormControl('Idolsberg', [Validators.maxLength(15)]);

  ngOnInit() {
    this.subscribeNameChanges();
  }

  subscribeNameChanges() {
    this.name.valueChanges.subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.subscribe((data) =>
      console.log('Form status changed', data)
    );
    if (this.name.errors) {
      this.name.errors.subscribe((data) => console.log('Form errors:', data));
    }
  }

  updateName() {
    this.name.setValue('Soi - Gladdenfields Beeing Verry Pretty');
  }

  resetName() {
    this.name.reset('Giro');
  }
}
