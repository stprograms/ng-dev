import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emptyPerson } from '../empty-person';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.scss'],
})
export class TemplateValidationComponent implements OnInit {
  @ViewChild('personForm') form: NgForm;

  person: Person = emptyPerson;

  constructor(private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.person = p;
    });
  }

  patchValue() {
    this.form.controls['name'].setValue('Heinrich');
  }

  savePerson(personForm): void {
    this.ps.save(personForm);
  }
}
