import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material.module';
import { foodLoadData } from '../food.mocks';
import { FoodListComponent } from './food-list.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatTableHarness } from '@angular/material/table/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { SimpleChange } from '@angular/core';

describe('FoodListComponent', () => {
  let fixture: ComponentFixture<FoodListComponent>;
  let comp: FoodListComponent;
  let loader: HarnessLoader;
  let tbl: MatTableHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodListComponent],
      imports: [MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create to component', () => {
    expect(comp).toBeTruthy();
  });

  it('should have a row for eacht data item in the table', async () => {
    comp.ngOnChanges({
      food: new SimpleChange(null, foodLoadData, false),
    });
    fixture.detectChanges();
    tbl = await loader.getHarness(MatTableHarness);
    expect((await tbl.getRows()).length).toEqual(4);
  });

  it('should trigger delete when clicked', () => {
    comp.ngOnChanges({
      food: new SimpleChange(null, foodLoadData, false),
    });
    fixture.detectChanges();
    //output html for checking
    console.log(fixture.debugElement.nativeElement.outerHTML);

    const spy = spyOn(comp.foodDeleted, 'emit');
    let btn = fixture.nativeElement.querySelector('.btnDelete');
    btn.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should trigger select when clicked', () => {
    comp.ngOnChanges({
      food: new SimpleChange(null, foodLoadData, false),
    });
    fixture.detectChanges();
    const spy = spyOn(comp.foodSelected, 'emit');
    fixture.nativeElement.querySelector('.btnSelect').click();
    expect(spy).toHaveBeenCalled();
  });
});
