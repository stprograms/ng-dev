import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
  constructor(private ps: PersonService) {}

  hide = false;
  persons: Person[];
  selectedPerson: Person = { id: 0, name: '', age: 0, gender: '' };
  latePerson: Person;
  isActive: boolean = false;

  ngOnInit() {
    this.ps.getPersons().subscribe((data) => {
      this.persons = data;
      if (this.persons.length > 0) {
        this.selectedPerson = this.persons[0];
      }
    });

    of({ name: 'Heidi', age: 13, gender: 'female' } as Person)
      .pipe(delay(4000))
      .subscribe((data) => {
        this.latePerson = data;
      });
  }

  toggleDisplay() {
    this.hide = !this.hide;
  }

  handleChange(p: Person) {
    console.log('value received from eventbinding', p);
  }
}
