import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
})
export class SkillRowComponent implements OnInit {
  @Input() skill: Skill;
  @Output() editItem: EventEmitter<Skill> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  edit(item: Skill): void {
    this.editItem.emit(item);
  }
}
