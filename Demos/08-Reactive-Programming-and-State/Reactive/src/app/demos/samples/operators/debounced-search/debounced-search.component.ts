import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
})
export class DebouncedSearchComponent implements OnInit {
  constructor() {}

  searchterm: UntypedFormControl = new UntypedFormControl('');

  ngOnInit() {
    this.searchterm.valueChanges.pipe(debounceTime(750)).subscribe((val) => {
      console.log('Currently your searching debounced for:', val);
    });
  }
}
