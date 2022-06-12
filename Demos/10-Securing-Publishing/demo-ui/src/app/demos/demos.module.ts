import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FBAuthModule } from '../fbauth/fbauth.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { FirebaseComponent } from './samples/firebase/firebase.component';
import { FirebaseAuthInterceptor } from '../fbauth/firebase/firebase-auth.interceptor';
import { DemoService } from './demo-base/demo.service';
import { LoadingService } from '../shared/loading/loading.service';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [{ path: 'firebase', component: FirebaseComponent }],
  },
];

@NgModule({
  declarations: [DemoContainerComponent, FirebaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    FBAuthModule,
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseAuthInterceptor,
      multi: true,
    },
  ],
})
export class DemosModule {}
