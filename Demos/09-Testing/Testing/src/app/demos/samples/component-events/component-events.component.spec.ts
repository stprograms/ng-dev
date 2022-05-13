import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ComponentEventsComponent } from './component-events.component';
import { By } from '@angular/platform-browser';

describe('Component - Events - EventsComponent', () => {
  let component: ComponentEventsComponent;
  let fixture: ComponentFixture<ComponentEventsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentEventsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEventsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the count - triggerEventHandler', () => {
    const divClick = fixture.debugElement.query(By.css('#clickable'));
    divClick.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.count).toBe(1);

    // Actually not needed as this would test Angular - just to show
    const divResult = fixture.debugElement.query(By.css('.result'));
    expect(divResult.nativeElement.innerText).toContain('1');
  });

  it('should increment the count - Native Api', () => {
    const divClick = fixture.debugElement.query(By.css('#clickable'));
    divClick.nativeElement.click();
    divClick.nativeElement.click();
    divClick.nativeElement.click();
    fixture.detectChanges();

    expect(component.count).toBe(3);

    // Actually not needed as this would test Angular - just to show
    const divResult = fixture.debugElement.query(By.css('.result'));
    expect(divResult.nativeElement.innerText).toContain('3');
  });
});
