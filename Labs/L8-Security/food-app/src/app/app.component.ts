import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MenuService } from './shared/menu/menu.service';
import { LoadingService } from './shared/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Food App';
  mode: MatDrawerMode = 'side';

  constructor(public ms: MenuService, public ls: LoadingService) {
    ms.sideNavPosition.subscribe((m) => (this.mode = m));
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.sideNavVisible.subscribe((visible) => {
      result = visible
        ? {
            'padding-left': '10px',
          }
        : {};
    });
    console.log('style:', result);
    return result;
  }
}
