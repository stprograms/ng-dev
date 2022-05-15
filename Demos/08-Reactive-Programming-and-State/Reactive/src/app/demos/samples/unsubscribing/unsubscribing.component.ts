import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribing',
  templateUrl: './unsubscribing.component.html',
  styleUrls: ['./unsubscribing.component.scss'],
})
export class UnsubscribingComponent implements OnDestroy, AfterViewInit {
  @ViewChild('signPad', { static: true }) canvas: ElementRef;

  constructor() {}

  subMouseEvents: Subscription;
  result: { X: number; Y: number } = { X: 0, Y: 0 };

  ngAfterViewInit(): void {
    this.subscribeCanvas();
  }

  ngOnDestroy() {
    this.subMouseEvents.unsubscribe();
    console.log('Mouse Subscription unsubscribed');
  }

  subscribeCanvas() {
    if (this.canvas) {
      const evtMouse = fromEvent(this.canvas.nativeElement, 'mousemove').pipe(
        tap((data: any) => console.log('original data', data)),
        map((evt: MouseEvent) => {
          return { X: evt.clientX, Y: evt.clientY };
        }),
        tap((data: any) => console.log('modfied data', data))
      );

      this.subMouseEvents = evtMouse.subscribe((point) => {
        this.result = point;
        console.log('Mouse Moved @: ', point);
      });
    }
  }

  unsubscribeMouseEvt() {
    this.subMouseEvents.unsubscribe();
    console.log('unsubscribed from Mouse Event');
  }
}
