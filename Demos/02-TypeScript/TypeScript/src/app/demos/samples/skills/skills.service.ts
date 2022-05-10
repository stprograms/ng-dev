import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import { Skill } from './skill.model';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  private url = `${environment.api}skills`;

  getSkills(): Observable<Skill[]> {
    return this.httpClient
      .get<Skill[]>(this.url)
      .pipe(tap((data) => console.log('Received skills:', data)));
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(this.url, skill);
  }

  deleteSkill(skill: Skill): Observable<any> {
    return this.httpClient.delete(`${this.url}/${skill.id}`);
  }
}
