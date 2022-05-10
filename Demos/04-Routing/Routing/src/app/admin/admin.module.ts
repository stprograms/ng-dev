import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAComponent } from './admin-a/admin-a.component';
import { AdminBComponent } from './admin-b/admin-b.component';

@NgModule({
  declarations: [AdminAComponent, AdminBComponent],
  imports: [CommonModule],
})
export class AdminModule {}
