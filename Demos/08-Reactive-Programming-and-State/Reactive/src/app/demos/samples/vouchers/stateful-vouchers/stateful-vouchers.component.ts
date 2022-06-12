import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { StatefulVoucherService } from '../stateful-voucher.service';
import { Voucher } from '../voucher.model';

@Component({
  selector: 'app-stateful-vouchers',
  templateUrl: './stateful-vouchers.component.html',
  styleUrls: ['./stateful-vouchers.component.scss'],
})
export class StatefulVouchersComponent implements OnInit {
  filter = new UntypedFormControl('');
  vouchers = this.vs.getAllVouchers();
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['ID', 'Text', 'Date', 'Amount', 'deleteItem'];

  // vouchers$ = combineLatest([
  //   this.demosData$,
  //   this.filter$.valueChanges.pipe(startWith('')),
  // ]).pipe(
  //   map(([demos, filter]) => {
  //     return filter != ''
  //       ? demos.filter((d) =>
  //           d.title.toLowerCase().includes(filter.toLowerCase())
  //         )
  //       : demos;
  //   })
  // );

  constructor(private vs: StatefulVoucherService) {}

  ngOnInit() {
    this.vs.getAllVouchers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(row: any) {
    console.log('Edit Row', row);
  }

  deleteVoucher(v: Voucher) {
    this.vs.deleteVoucher(v.ID);
  }
}
