import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  private url = `${environment.api}skills`;

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url);
  }

  getSkill(id): Observable<Skill> {
    return this.httpClient.get<Skill>(`${this.url}/${id}`);
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(this.url, skill);
  }

  updateSkill(skill: Skill): Observable<Skill> {
    return this.httpClient.put<Skill>(`${this.url}/${skill.id}`, skill);
  }

  deleteSkill(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
