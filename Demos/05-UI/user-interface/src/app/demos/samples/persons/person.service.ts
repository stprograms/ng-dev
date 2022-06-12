import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private httpClient: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.httpClient
      .get<Person[]>(environment.personApi)
      .pipe(delay(2000));
  }
}
