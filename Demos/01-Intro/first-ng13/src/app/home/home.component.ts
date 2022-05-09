import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills/skills.service';
import { Skill } from '../skills/skill.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  skills: Skill[] = [];

  constructor(public service: SkillsService) {}

  ngOnInit(): void {
    this.service.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }
}
