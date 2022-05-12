import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  public skillForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      name: 'Giro',
      skillsGrp: this.fb.array([
        this.fb.group({ skillname: 'Hunting', years: 9 }),
      ]),
    });
  }

  getElementsInFormArray() {
    return (this.skillForm.controls['skillsGrp'] as FormArray).controls;
  }

  addSkill() {
    const skillsGrp = this.skillForm.controls['skillsGrp'] as FormArray;
    skillsGrp.push(
      this.fb.group({
        skillname: '',
        years: '',
      })
    );
  }

  saveForm() {
    console.log('saving ...', this.skillForm.value);
  }
}
