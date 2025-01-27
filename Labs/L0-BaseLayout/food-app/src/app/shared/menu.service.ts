import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  constructor(private httpClient: HttpClient) {}

  getMenuItems(): Observable<string[]> {
    return this.httpClient.get<string[]>("assets/menuItems.json");
  }
}
