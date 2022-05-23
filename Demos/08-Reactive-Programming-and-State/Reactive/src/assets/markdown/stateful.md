- Examine stateful-voucher.service.ts and its use of the BehaviorSubject:

    ```typescript
    private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject<Voucher[]>([]);
    ```
- Add the app-sum to the `demo-container.component.html`:

    ```html
    <mat-sidenav #sidenav [opened]="ms.visible$ | async" [mode]="sidenavMode">
    <mat-toolbar color="accent">
    ...
    </mat-toolbar>
    <mat-nav-list>
    ...
    </mat-nav-list>
    <app-sum></app-sum>
    ```
- Discuss it's implementation code:

    ```typescript
    constructor(private vs: StatefulVoucherService) {}
    sum = this.vs.getAllVouchers()
        .pipe(map((vs) => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));
    ``` 