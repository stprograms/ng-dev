import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from './food-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * @brief Service fetching the list of foods
 */
export class FoodService {

  constructor(private http: HttpClient) { }

  /**
   * @brief Get the list of foods
   * 
   * @returns List of foods from json file
   */
  public getFoods() : Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>('assets/food.json');
  }
}
