# Food App - State

Implement a responsive Side Menu:

- Implement a menu.service as a Stateful Service using BehaviorSubjects with the two properties:

    - sideNavVisible: boolean
    - sideNavPosition: over | side

- Add a Material Sidenav to app.component   

    ```html
    <div
    gdAreas="navbar | loading | mainrow"
    gdRows="70px 10px auto"
    gdColumns="auto"
    class="grid"
    >
    <div gdArea="navbar"><app-navbar></app-navbar></div>
    <div gdArea=loading><app-loading *ngIf="ls.isLoading | async"></app-loading> </div>
    <div gdArea="mainrow" class="main">
        <mat-sidenav-container>
        <mat-sidenav  #sidenav
        [opened]="ms.sideNavVisible | async"
        [mode]="mode">
            <app-sidebar></app-sidebar>
        </mat-sidenav>
        <mat-sidenav-content [ngStyle]="getWorkbenchStyle()">
            <router-outlet></router-outlet>
        </mat-sidenav-content>
        </mat-sidenav-container>
    </div> 
    </div>
    ``` 
- Take the solution from the [Demo App](/Demos/08-Reactive-Programming-and-State/Reactive/src/app/shared/menu/menu.service.ts) as a reference.

Implement a global loading inicator (Advanced Optional):

- Implement a stateful loading service

- Implement an [HttpInterceptor](https://angular.io/guide/http#intercepting-requests-and-responses) to toggle a loading service that is used to show a loading indicator. Keep in mind that there could be multiple request at the same time.
