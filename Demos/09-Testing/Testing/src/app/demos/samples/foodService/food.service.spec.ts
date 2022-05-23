import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import {
  foodAddedItem,
  foodAddItem,
  foodDeleteItem,
  foodLoadData,
  foodQueryItem,
} from './food.mocks';
import { FoodItem } from './food.model';
import { FoodService } from './food.service';
import { foodUpdateItem, foodUpdatedItem } from './food.mocks';

describe('Service - HttpTestingController', () => {
  let fs: FoodService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService],
    });

    fs = TestBed.inject(FoodService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should return the initial load data', () => {
    fs.getAllFood().subscribe((data) => {
      // several data tests
      expect(data).toBeTruthy();
      expect(data.length).toBe(4);
      const firstFood = data.find((f) => f.id == 2);
      expect(firstFood).toEqual(foodQueryItem);
    });

    // test if a specific url has been called using GET
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');
    // flushing down mock data
    req.flush(foodLoadData);
    // make sure all requests are completed -> can be moved to afterEach
    controller.verify();
  });

  it('should create a new food item', () => {
    fs.addFood(foodAddItem as FoodItem).subscribe((f) => {
      expect(f).toBeTruthy();
    });

    // test if a specific url has been called using POST
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('POST');
    // flushing down mock data
    req.flush(foodAddedItem);
    // make sure all requests are completed -> can be moved to afterEach
    controller.verify();
  });

  it('should update a food item', () => {
    fs.updateFood(foodUpdateItem as FoodItem).subscribe((f) => {
      expect(f).toBeTruthy();
    });

    // test if a specific url has been called using POST
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('PUT');
    // flushing down mock data
    req.flush(foodUpdatedItem);
    // make sure all requests are completed -> can be moved to afterEach
    // controller.verify();
  });

  it('should delete a food item', () => {
    fs.deleteFood(foodDeleteItem as FoodItem).subscribe((f) => {
      expect(f).toEqual({});
    });

    // test if a specific url has been called using POST
    const url = `${environment.api}food/${foodDeleteItem.id}`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('DELETE');

    // flushing down mock data
    req.flush({});
    // make sure all requests are completed -> can be moved to afterEach
    controller.verify();
  });
});
