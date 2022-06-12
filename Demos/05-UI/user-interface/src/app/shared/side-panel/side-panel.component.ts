import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  constructor(private sns: SnackbarService) {}

  editorDisplayed: boolean;

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggleEditor() {
    this.sns.displayAlert('Info', 'Not implemented - just a Demo');
  }

  showUpload() {
    this.sns.displayAlert('Info', 'Not implemented - just a Demo');
  }
}
