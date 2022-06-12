import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SkillsRoutingModule } from './skills-routing.module';
import { MaterialModule } from '../material.module';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';

@NgModule({
  declarations: [SkillsListComponent, SkillRowComponent, SkillsEditComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SkillsRoutingModule,
  ],
})
export class SkillsModule {}
