import { Component, OnInit } from '@angular/core';
import {
  forkJoin,
  from,
  interval,
  Observable,
  of,
  Subscription,
  throwError,
} from 'rxjs';
import { catchError, delay, finalize, map, take, tap } from 'rxjs/operators';
import { Voucher } from '../vouchers/voucher.model';
import { VouchersService } from '../vouchers/voucher.service';
import { DoublerService } from './doubler.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  constructor(private vs: VouchersService, private ds: DoublerService) {}

  sub: Subscription;
  response: any;
  vouchers: Voucher[];

  ngOnInit() {}

  unsbscribe = () => (this.sub != null ? this.sub.unsubscribe() : null);
  setLabel = (v: Voucher) => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  log = (msg: string, data: any) => {
    console.log(
      `executing: ${msg}, 'data' is Array: ${Array.isArray(data)}`,
      data
    );
    this.vouchers = Array.isArray(data) ? data : [data];
  };

  useMap() {
    this.vs
      .getVouchers()
      .pipe(
        // Obs Operator map()
        map((va) => {
          // ES6 array.map()
          return va.map((v) => ({
            ...v,
            Label: `${v.Text} costs € ${v.Amount}`,
          }));
        })
      )
      .subscribe((data) => this.log('use map() - RxJS 5 pattern', data));
  }

  useMapAndTap() {
    let arr$ = from([2, 10, 20]);

    arr$
      .pipe(
        tap((i) => console.log('tap before', i)),
        map((a) => a * 2),
        tap((f) => f * 10)
      )
      .subscribe((item) => console.log('result', item));
  }

  errHandling() {
    this.vs
      .getVouchers()
      .pipe(
        tap((data) => console.log('logged by tap(): ', data)),
        map((va) => va.map(this.setLabel)),
        catchError((err) => {
          return throwError('Err happened while processing vouchers');
        }),
        finalize(() => console.log('finalizing ...'))
      )
      .subscribe((data) => this.log('errHandling', data));
  }

  useFind() {
    this.vs
      .getVouchers()
      .pipe(map((arr) => arr.find((v: Voucher) => v.ID == 3)))
      .subscribe((data) => this.log('getByID - using find()', data));
  }

  useFilter() {
    this.vs
      .getVouchers()
      .pipe(map((arr) => arr.filter((v: Voucher) => v.Paid)))
      .subscribe((data) => this.log('useFilter', data));
  }

  // Compare the two outputs
  useTake() {
    this.vs
      .getVouchers()
      .pipe(take(3))
      .subscribe((data) => this.log('useTake', data));
  }

  useInterval() {
    interval(1000)
      .pipe(take(3))
      .subscribe((x) => console.log(x));
  }

  useDelay() {
    const fakeObservable = of(['hund', 'katze', 'maus']).pipe(delay(5000));
    console.log('before delay execution - waiting 5 secs');
    fakeObservable.subscribe((data) => console.log(data));
  }

  public requestMockVM(): Observable<number[]> {
    const response1 = this.ds.double(3);
    const response2 = this.ds.double(9);
    const response3 = this.ds.double(2);
    return forkJoin([response1, response2, response3]);
  }

  useForkJoin() {
    this.requestMockVM().subscribe((arr) => {
      this.response = arr;
    });
  }
}
