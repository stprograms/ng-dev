import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { FormArrayComponent } from './samples/form-array/form-array.component';
import { FormControlComponent } from './samples/form-control/form-control.component';
import { FormsBuilderComponent } from './samples/forms-builder/forms-builder.component';
import { NgModelGrpComponent } from './samples/ng-model-grp/ng-model-grp.component';
import { ReactiveFormsComponent } from './samples/reactive-forms/reactive-forms.component';
import { ReactiveValidationComponent } from './samples/reactive-validation/reactive-validation.component';
import { TemplateDrivenComponent } from './samples/template-driven/template-driven.component';
import { TemplateValidationComponent } from './samples/template-validation/template-validation.component';
import { ReactiveTypedComponent } from './samples/reactive-typed/reactive-typed.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'templatedriven', component: TemplateDrivenComponent },
      { path: 'ngmodelgrp', component: NgModelGrpComponent },
      { path: 'reactiveforms', component: ReactiveFormsComponent },
      { path: 'formsbuilder', component: FormsBuilderComponent },
      { path: 'templatevalidation', component: TemplateValidationComponent },
      { path: 'reactivevalidation', component: ReactiveValidationComponent },
      { path: 'formcontrol', component: FormControlComponent },
      { path: 'formarray', component: FormArrayComponent },
      { path: 'reactive-typed', component: ReactiveTypedComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    FormsBuilderComponent,
    TemplateValidationComponent,
    ReactiveValidationComponent,
    FormControlComponent,
    FormArrayComponent,
    NgModelGrpComponent,
    ReactiveTypedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule {}
