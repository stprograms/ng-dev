import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const forms = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: forms,
  exports: forms,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  providers: [],
})
export class FBAuthModule {}
