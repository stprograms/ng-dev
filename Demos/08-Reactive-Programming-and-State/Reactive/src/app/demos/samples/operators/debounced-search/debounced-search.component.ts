import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
})
export class DebouncedSearchComponent implements OnInit {
  constructor() {}

  searchterm: FormControl = new FormControl('');

  ngOnInit() {
    this.searchterm.valueChanges.pipe(debounceTime(750)).subscribe((val) => {
      console.log('Currently your searching debounced for:', val);
    });
  }
}
