import { FoodItem } from '../foodService/food.model';
import { ComponentClassComponent } from './component-class.component';

describe('ComponentClassComponent', () => {
  let component: ComponentClassComponent;

  beforeEach(() => {
    component = new ComponentClassComponent();
  });

  it('should create and setup correctly', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.title).toBe('Food App');
    expect(component.food.length).toEqual(2);
  });

  it('should have 3 items when an item is added', () => {
    let item: FoodItem = { id: 4, name: 'Blini with Salmon', rating: 1 };
    component.ngOnInit();
    expect(component.food.length).toEqual(2);
    component.add(item);
    expect(component.food.length).toEqual(3);
    expect(component.food[2]).toEqual(item);
  });
});
