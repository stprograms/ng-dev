- Explain `menu.service.ts`

```typescript
export class MenuService {
  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }
  visible$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  position$: BehaviorSubject<string> = new BehaviorSubject('over');
```

- Explain `menu.service.ts` and its responsive behavior when changing screen width. Also mention `navbar.component.ts` and the Hamburger-Menu.

```html
<mat-toolbar color="primary">
  <mat-toolbar-row fxLayoutGap="10px">
    <div fxHide.gt-xs (click)="toggleMenu()" class="clickable" >
         <mat-icon color="accent">menu</mat-icon>
    </div>
```