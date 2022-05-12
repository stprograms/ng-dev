import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Person } from './person.model';
import { delay } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  getPerson(): Observable<Person> {
    return of({
      name: 'Heinz',
      gender: 'male',
      age: 20,
      email: 'derschoeneheinz@xyz.at',
      wealth: 'poor',
      address: {
        street: 'Hinzstraße',
        city: 'Kunzberg',
        postalCode: '1010',
      },
    }).pipe(delay(1500));
  }

  save(form: NgForm) {
    console.log('ngForm:', form);
    console.log('ngForm.value:', form.value as Person);
  }

  checkMailExists(email: string): Observable<boolean> {
    // Mocking Http Call to service to check weather user exists
    let exists = email == 'alexander.pajer@integrations.at';
    return of(exists).pipe(delay(1500));
  }
}
