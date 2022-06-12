import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Voucher } from '../vouchers/vouchers.model';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnInit {
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['Text', 'Date', 'Amount', 'action'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Voucher[]>('./assets/vouchers.json').subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(event: KeyboardEvent) {
    let filterVal = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterVal;
  }

  editItem(row: any) {
    console.log('Edit Row', row);
  }
}
