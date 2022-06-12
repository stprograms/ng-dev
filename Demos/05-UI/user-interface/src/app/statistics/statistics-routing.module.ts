import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenueComponent } from './revenue/revenue.component';
import { CostComponent } from './cost/cost.component';

const routes: Routes = [
  {
    path: ':year',
    children: [
      {
        path: 'revenue',
        component: RevenueComponent,
      },
      {
        path: 'cost',
        component: CostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
