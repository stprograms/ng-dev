import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss'],
})
export class FlexLayoutComponent implements OnInit {
  persons: Person[];
  current: Person = new Person();

  constructor(private ps: PersonService) {}

  ngOnInit(): void {
    this.ps.getPersons().subscribe((data) => {
      this.persons = data;
      if (this.persons.length > 0) {
        this.current = this.persons[0];
      }
    });
  }
}
