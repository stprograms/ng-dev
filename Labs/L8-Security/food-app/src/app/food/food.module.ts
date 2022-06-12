import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FoodRoutingModule } from "./food-routing.module";
import { FoodContainerComponent } from "./food-container/food-container.component";
import { FoodEditComponent } from "./food-edit/food-edit.component";
import { FoodListComponent } from "./food-list/food-list.component";
import { MaterialModule } from "../material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FoodContainerComponent, FoodListComponent, FoodEditComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FoodModule {}
