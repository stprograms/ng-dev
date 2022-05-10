import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss'],
})
export class NgTemplateComponent implements OnInit {
  constructor(private ps: PersonService) {}

  persons: Person[];

  ngOnInit(): void {
    this.ps
      .getPersons()
      .pipe(delay(1500))
      .subscribe((data) => {
        this.persons = data;
      });
  }
}
