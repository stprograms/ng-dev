import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FoodItem } from './foodItem';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * @brief Service fetching the list of foods
 */
@Injectable({
    providedIn: 'root'
})
export class FoodService {
    private SERVICE_LOCATION: string = `${environment.foodResource}food`;

    constructor(private http: HttpClient) {}

    /**
     * @brief Get the list of foods
     *
     * @returns List of foods from json file
     */
    public getFoods(): Observable<FoodItem[]> {
        return this.http.get<FoodItem[]>(this.SERVICE_LOCATION);
    }

    public createFood(f: FoodItem): Observable<any> {
        return this.http.post<any>(this.SERVICE_LOCATION, f, {
            observe: 'response'
        });
    }

    public updateFood(f: FoodItem): Observable<any> {
        return this.http.put<any>(`${this.SERVICE_LOCATION}/${f.id}`, f, {
            "observe" : "response"
        });
    }

    public deleteFood(f : FoodItem): Observable<any> {
        return this.http.delete<any>(`${this.SERVICE_LOCATION}/${f.id}`, {
            observe: "response"
        });
    }
}
