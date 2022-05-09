import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get<Skill[]>('/assets/skills.json');
  }
}
