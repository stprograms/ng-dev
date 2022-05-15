import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-material-showcase',
  templateUrl: './material-showcase.component.html',
  styleUrls: ['./material-showcase.component.scss'],
})
export class MaterialShowCaseComponent implements OnInit {
  card = '/assets/images/CleoSoi.jpg';
  count = 3;
  public images = ['giraffe', 'monkey', 'elefant'];

  constructor(private sns: SnackbarService) {}

  ngOnInit() {}

  incrementCt() {
    this.count += 1;
  }

  onLike() {
    this.sns.displayAlert('Great', 'Thank you for liking ...');
  }
}
