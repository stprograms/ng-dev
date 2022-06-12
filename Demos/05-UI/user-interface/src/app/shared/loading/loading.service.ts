import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading = new BehaviorSubject(false);
  constructor() {}

  getLoading() {
    return this.isLoading;
  }

  setLoading(loading: boolean) {
    this.isLoading.next(loading);
  }
}
