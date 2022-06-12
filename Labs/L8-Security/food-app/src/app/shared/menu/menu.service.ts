import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MenuItem } from './menu-item.model';
import { filter, map } from 'rxjs/operators';
import { MatDrawerMode } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }

  sideNavVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  sideNavPosition: BehaviorSubject<MatDrawerMode> =
    new BehaviorSubject<MatDrawerMode>('side');

  private handleChange() {
    this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        this.sideNavVisible.next(change.mqAlias === 'xs' ? false : true);
        this.sideNavPosition.next(change.mqAlias === 'xs' ? 'over' : 'side');
      });
  }

  getTopItems(): Observable<MenuItem[]> {
    return of([
      { label: 'Home', url: '' },
      { label: 'Demos', url: 'demos' },
    ]);
  }

  toggleMenuVisibility() {
    const visible = !this.sideNavVisible.getValue();
    this.sideNavVisible.next(visible);
  }
}
