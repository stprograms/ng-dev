import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  constructor() {}

  name = new UntypedFormControl('Giro', [
    Validators.required,
    Validators.minLength(3),
  ]);
  postal = new UntypedFormControl('3544');
  city = new UntypedFormControl('Idolsberg', [Validators.maxLength(15)]);

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
  }

  updateName() {
    this.name.setValue('Soi - Gladdenfields Beeing Verry Pretty');
  }

  resetName() {
    this.name.reset('Giro');
  }
}
