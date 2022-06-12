import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';
import { foodEmptyItem, foodSingleItem } from '../food.mocks';
import { FoodEditComponent } from './food-edit.component';
import { CommonModule } from '@angular/common';

describe('FoodEditComponent', () => {
  let fixture: ComponentFixture<FoodEditComponent>;
  let comp: FoodEditComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodEditComponent],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodEditComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create to component', () => {
    expect(comp).toBeTruthy();
  });

  it('should render a blank form when an "empty" food item is passed', () => {
    comp.ngOnChanges({
      food: new SimpleChange(null, foodEmptyItem, false),
    });
    fixture.detectChanges();

    let fcName = comp.form.controls['name'];
    expect(fcName).toBeTruthy();
    expect(fcName.value).toBe('');

    let fcPrice = comp.form.controls['price'];
    expect(fcPrice).toBeTruthy();
    expect(fcPrice.value).toBe(0);
  });

  it('should render an food item', () => {
    comp.ngOnChanges({
      food: new SimpleChange(null, foodSingleItem, false),
    });
    fixture.detectChanges();

    let fcName = comp.form.controls['name'];
    expect(fcName).toBeTruthy();
    expect(fcName.value).toBe('Pad Thai');

    let fcPrice = comp.form.controls['price'];
    expect(fcPrice).toBeTruthy();
    expect(fcPrice.value).toBe(5);
  });

  it('should emmit the correct item when saving', () => {
    comp.ngOnChanges({
      food: new SimpleChange(null, foodSingleItem, false),
    });
    fixture.detectChanges();

    let fcName = comp.form.controls['name'];
    expect(fcName.value).toEqual('Pad Thai');

    fcName.setValue('Fried Noodles');
    fixture.detectChanges();
    expect(fcName.value).toEqual('Fried Noodles');

    const spy = spyOn(comp.saveFood, 'emit');
    let btn = fixture.nativeElement.querySelector('#btnSave');
    btn.click();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith({
      id: 1,
      name: 'Fried Noodles',
      price: 5,
      calories: 500,
    });
  });
});
