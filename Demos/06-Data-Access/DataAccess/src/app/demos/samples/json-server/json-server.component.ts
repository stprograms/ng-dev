import { Component, OnInit } from '@angular/core';
import { addBusinessDays } from 'date-fns';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';
import { Skill } from '../../../skills/skill.model';
import { SkillsService } from '../../../skills/skills.service';

@Component({
  selector: 'app-json-server',
  templateUrl: './json-server.component.html',
  styleUrls: ['./json-server.component.scss'],
})
export class JsonServerComponent implements OnInit {
  constructor(private service: SkillsService, private sns: SnackbarService) {}

  result: any;
  loading = false;

  ngOnInit(): void {}

  getSkills(): void {
    this.loading = true;
    this.service.getSkills().subscribe((data) => {
      this.result = data;
      this.loading = false;
    });
  }

  addSkill(): void {
    const skill = {
      name: 'Cooking Pad Krapao',
      hours: 1,
      completed: false,
      dueDate: addBusinessDays(new Date(), 5),
    };
    this.loading = true;

    this.service.addSkill(skill).subscribe((response: Skill) => {
      this.loading = false;
      this.sns.displayAlert('json-server', `Saved with id: ${response.id}`);
    });
  }

  deleteSkill(): void {
    const id = 3;

    this.service.deleteSkill(id).subscribe(() => {
      this.loading = false;
      this.sns.displayAlert('json-server', `Deleted with id: ${id}`);
    });
  }

  updateSkill(): void {
    const skill = {
      id: 1,
      name: 'Custom Angular Theme',
      hours: 4,
      completed: true,
    };

    this.service.updateSkill(skill).subscribe((response: Skill) => {
      this.loading = false;
      this.sns.displayAlert('json-server', `Saved with id: ${response.id}`);
    });
  }
}
