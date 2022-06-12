import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonHarness } from '@angular/material/button/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { FoodEditComponent } from '../food-edit/food-edit.component';
import { FoodListComponent } from '../food-list/food-list.component';
import {
  foodAddedResult,
  foodAddItem,
  foodDeleteItem,
  foodDeleteResult,
  foodEmptyItem,
  foodLoadData,
  foodSingleItem,
  foodUpdatedItem,
  foodUpdatedResult,
} from '../food.mocks';
import { FoodService } from '../food.service';
import { FoodContainerComponent } from './food-container.component';

describe('food-list-container', () => {
  let fs: any;
  let comp: FoodContainerComponent;
  let fixture: ComponentFixture<FoodContainerComponent>;
  let loader: HarnessLoader;
  let btnAdd: MatButtonHarness;

  beforeEach(async () => {
    fs = jasmine.createSpyObj([
      'getFood',
      'deleteFood',
      'addFood',
      'updateFood',
    ]);
    fs.getFood.and.returnValue(of(foodLoadData));

    await TestBed.configureTestingModule({
      declarations: [FoodListComponent, FoodEditComponent],
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
      providers: [{ provide: FoodService, useValue: fs }],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodContainerComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    btnAdd = await loader.getHarness(
      MatButtonHarness.with({ text: 'Add Food' })
    );
  });

  it('should render the food-list.component', () => {
    fs.getFood.and.returnValue(of(foodLoadData));
    fixture.detectChanges();
    const fl = fixture.debugElement.queryAll(By.directive(FoodListComponent));
    expect(fl).toBeDefined();
  });

  it('should render the food-edit.component', () => {
    fs.getFood.and.returnValue(of(foodLoadData));
    fixture.detectChanges();
    const fl = fixture.debugElement.queryAll(By.directive(FoodEditComponent));
    expect(fl).toBeDefined();
  });

  it('should add an empty food the add is clicked', async () => {
    await btnAdd.click();
    expect(comp.selected).toEqual(foodEmptyItem);
  });

  it('should select thte correct food item', () => {
    comp.selectFood(foodSingleItem);
    expect(comp.selected).toEqual(foodSingleItem);
  });

  // it('should save a new food item', (done: DoneFn) => {
  //   fs.addFood.and.returnValue(of(foodAddedResult));
  //   comp.saveFood(foodAddItem);
  //   fixture.detectChanges();
  //   expect(comp.food).toEqual(foodAddedResult);
  //   done();
  // });

  // it('should update food item', () => {
  //   fs.updateFood.and.returnValue(of(foodUpdatedResult));
  //   comp.saveFood(foodUpdatedItem);
  //   expect(comp.food).toEqual(foodUpdatedResult);
  // });

  it('should delete the food item', () => {
    fs.deleteFood.and.returnValue(of(foodDeleteResult));
    comp.deleteFood(foodDeleteItem);
    expect(comp.food).toEqual(foodDeleteResult);
  });
});
