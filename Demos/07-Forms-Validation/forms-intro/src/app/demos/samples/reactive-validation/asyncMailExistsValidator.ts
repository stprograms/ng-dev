import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PersonService } from '../person.service';

@Injectable({ providedIn: 'root' })
export class asyncMailExistsValidator implements AsyncValidator {
  constructor(private ps: PersonService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.ps.checkMailExists(ctrl.value).pipe(
      map((exists) => {
        return exists ? { mailexists: true } : null;
      })
    );
  }
}
