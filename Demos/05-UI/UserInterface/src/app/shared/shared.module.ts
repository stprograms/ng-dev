import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { LoadingComponent } from './loading/loading.component';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { IntroComponent } from './intro/intro.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  PageNotFoundComponent,
  MarkdownRendererComponent,
  LoadingComponent,
  IntroComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  declarations: mods,
  exports: mods,
})
export class SharedModule {}
