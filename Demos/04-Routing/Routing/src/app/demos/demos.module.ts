import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { demoRoutes } from './demo-routing.module';
import { ChildRoutesComponent } from './samples/child-routes/child-routes.component';
import { ComponentLessComponent } from './samples/component-less/component-less.component';
import { LazyLoadingComponent } from './samples/lazy-loading/lazy-loading.component';
import { ParamMapComponent } from './samples/paramMap/param-map/param-map.component';
import { PmChildComponent } from './samples/paramMap/pm-child/pm-child.component';
import { PreloadComponent } from './samples/preload/preload.component';
import { RouteGuardsComponent } from './samples/route-guards/route-guards.component';
import { RouterAnimationsComponent } from './samples/router-animations/router-animations.component';
import { RouterStateComponent } from './samples/router-state/router-state.component';
import { RoutingBasicsComponent } from './samples/routing-basics/routing-basics.component';
import { SecondaryRoutesComponent } from './samples/secondary-routes/secondary-routes.component';

@NgModule({
  declarations: [
    DemoContainerComponent,
    RoutingBasicsComponent,
    ChildRoutesComponent,
    SecondaryRoutesComponent,
    RouteGuardsComponent,
    PreloadComponent,
    ParamMapComponent,
    PmChildComponent,
    ComponentLessComponent,
    LazyLoadingComponent,
    RouterStateComponent,
    RouterAnimationsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule {}
