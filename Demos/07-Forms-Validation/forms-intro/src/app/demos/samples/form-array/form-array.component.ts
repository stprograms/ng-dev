import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  public skillForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
    this.skillForm = this.fb.group({
      name: 'Giro',
      skillsGrp: this.fb.array([
        this.fb.group({ skillname: 'Hunting', years: 9 }),
      ]),
    });
  }

  getElementsInFormArray() {
    return (this.skillForm.controls['skillsGrp'] as UntypedFormArray).controls;
  }

  addSkill() {
    const skillsGrp = this.skillForm.controls['skillsGrp'] as UntypedFormArray;
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
