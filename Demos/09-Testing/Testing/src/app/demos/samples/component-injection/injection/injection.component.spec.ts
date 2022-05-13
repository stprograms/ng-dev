import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { foodDeleteItem, foodLoadData } from '../../foodService/food.mocks';
import { FoodService } from '../../foodService/food.service';
import { InjectionComponent } from './injection.component';

describe('InjectionComponent', () => {
  let comp: InjectionComponent;
  let fixture: ComponentFixture<InjectionComponent>;
  let de: DebugElement;
  let fs: any;

  beforeEach(async () => {
    fs = jasmine.createSpyObj(['getAllFood', 'deleteFood']);
    fs.getAllFood.and.returnValue(of(foodLoadData));

    await TestBed.configureTestingModule({
      declarations: [InjectionComponent],
      imports: [CommonModule, HttpClientTestingModule],
      providers: [{ provide: FoodService, useValue: fs }],
    }).compileComponents();

    fixture = TestBed.createComponent(InjectionComponent);
    de = fixture.debugElement;
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fs.getAllFood.and.returnValue(of(foodLoadData));
    expect(comp).toBeTruthy();
    //printing out component html
    console.log(de.nativeElement.outerHTML);
  });

  it('should render 4 rows by default', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const divs = de.queryAll(By.css('.hoverclick'));
      expect(divs.length).toBe(4);
    });
  });

  it('should delete a row and have the correct count', () => {
    fs.deleteFood.and.returnValue(of({}));
    comp.deleteFood(foodDeleteItem);
    fixture.detectChanges();

    //print out the component html
    console.log(de.nativeElement.outerHTML);
    const rows = de.queryAll(By.css('.hoverclick'));
    expect(rows.length).toEqual(3);
  });
});
