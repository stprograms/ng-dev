import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsListComponent,
  },
  {
    path: ':id',
    component: SkillsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
