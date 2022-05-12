- Install ngx-markdown and prismjs

```
npm i -S ngx-markdown prismjs
```

- Investigate this componentent and markdown-renderer.component.ts in the SharedModule
- Investigate its registration and usage in DemoModule

```json
"styles": [
    "src/styles.scss",
    "node_modules/prismjs/themes/prism-okaidia.css"
],
"stylePreprocessorOptions": {
    "includePaths": ["src/theme"]
},
"scripts": [
    "node_modules/marked/marked.min.js",
    "node_modules/prismjs/prism.js",
    "node_modules/prismjs/components/prism-typescript.min.js",
    "node_modules/prismjs/components/prism-css.min.js"
]
```

Markdown also allows class highlighting using annotations like `typescript`

```typescript
export interface Skill {
  id?: number;
  name: string;
  hours: number;
  completed: boolean;
}
```