import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { environment } from 'src/environments/environment';

@Component({
  standalone: true,
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  imports: [
    HttpClientModule,
    MarkdownModule,
    MatCardModule,
    MatExpansionModule,
  ],
})
export class StandaloneComponent {
  md = 'standalone';
  panelOpenState = true;

  constructor() {}

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }
}
