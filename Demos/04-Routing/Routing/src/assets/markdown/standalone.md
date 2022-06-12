- Explain standalone.component.ts

    ```typescript
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
    ```