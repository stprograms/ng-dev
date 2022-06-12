import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Person, wealthOptsValues } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-reactive-typed',
  templateUrl: './reactive-typed.component.html',
  styleUrls: ['./reactive-typed.component.scss'],
})
export class ReactiveTypedComponent implements OnInit {
  constructor(private ps: PersonService) {}

  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  personForm: FormGroup<{
    name: FormControl<string | null>;
    age: FormControl<number | null>;
    email: FormControl<string | null>;
    gender: FormControl<string | null>;
    wealth: FormControl<string | null>;
  }>;

  ngOnInit() {
    //with strictPropertyInitialization:true in tsconfig.json this must be done in the constructor
    this.personForm = new FormGroup({
      name: new FormControl(this.person.name, Validators.required),
      age: new FormControl(this.person.age),
      email: new FormControl(this.person.email),
      gender: new FormControl(this.person.gender),
      wealth: new FormControl(this.person.wealth),
    });

    this.ps.getPerson().subscribe((p) => {
      // Could be setValue if model is implemented with all props in form
      // Oherwise use patchValue
      this.personForm.patchValue(p);
    });
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
