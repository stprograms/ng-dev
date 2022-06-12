import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Skill } from './skill.model';
import { Observable } from 'rxjs';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root',
})
export class SkillResolverService {
  constructor(private service: SkillsService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Skill | Observable<Skill> | Promise<Skill> {
    const id = +route.params['id'];
    return this.service.getSkill(id);
  }
}
