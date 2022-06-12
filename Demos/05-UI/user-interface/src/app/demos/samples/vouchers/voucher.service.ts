import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voucher } from './vouchers.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VouchersService {
  constructor(private http: HttpClient) {}

  url = '/assets/vouchers.json';

  getVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(this.url);
  }

  getVoucher(id: number): Observable<Voucher> {
    return this.getVouchers().pipe(map((vs) => vs.find((v) => v.ID == id)));
  }

  deleteVoucher(id: number) {
    console.log(`deleting voucher with id "${id}"`);
  }
}
