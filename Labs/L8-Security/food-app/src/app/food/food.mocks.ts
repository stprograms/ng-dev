import { FoodItem } from './food.model';

export const foodLoadData: FoodItem[] = [
  { id: 1, name: 'Pad Thai', price: 5, calories: 500 },
  { id: 2, name: 'Butter Chicken', price: 5, calories: 500 },
  { id: 3, name: 'Cannelloni', price: 4, calories: 500 },
  { id: 4, name: 'Cordon Bleu', price: 2, calories: 500 },
];

export const foodSingleItem = {
  id: 1,
  name: 'Pad Thai',
  price: 5,
  calories: 500,
} as FoodItem;

export const foodEmptyItem: FoodItem = {
  id: 0,
  name: '',
  price: 0,
  calories: 0,
} as FoodItem;

export const foodQueryItem = {
  id: 2,
  name: 'Butter Chicken',
  price: 5,
  calories: 500,
} as FoodItem;

// Add
export const foodAddItem = {
  id: 0,
  name: 'Gulasch',
  price: 2,
  calories: 500,
} as FoodItem;

export const foodAddedItem = {
  id: 5,
  name: 'Gulasch',
  price: 2,
  calories: 500,
} as FoodItem;

export const foodAddedResult: FoodItem[] = [
  { id: 1, name: 'Pad Thai', price: 5, calories: 500 },
  { id: 2, name: 'Butter Chicken', price: 5, calories: 500 },
  { id: 3, name: 'Cannelloni', price: 4, calories: 500 },
  { id: 4, name: 'Cordon Bleu', price: 2, calories: 500 },
  { id: 5, name: 'Gulasch', price: 2, calories: 500 },
];

// Update
export const foodUpdateItem = {
  id: 5,
  name: 'Gulyas',
  price: 2,
  calories: 500,
} as FoodItem;

export const foodUpdatedItem = {
  id: 5,
  name: 'Gulyas',
  price: 2,
  calories: 500,
} as FoodItem;

export const foodUpdatedResult: FoodItem[] = [
  { id: 1, name: 'Pad Thai', price: 5, calories: 500 },
  { id: 2, name: 'Butter Chicken', price: 5, calories: 500 },
  { id: 3, name: 'Cannelloni', price: 4, calories: 500 },
  { id: 4, name: 'Cordon Bleu', price: 2, calories: 500 },
  { id: 5, name: 'Gulyas', price: 2, calories: 500 },
];

// Delete
export const foodDeleteItem = {
  id: 4,
  name: 'Cordon Bleu',
  price: 2,
  calories: 500,
} as FoodItem;

export const foodDeleteResult: FoodItem[] = [
  { id: 1, name: 'Pad Thai', price: 5, calories: 500 },
  { id: 2, name: 'Butter Chicken', price: 5, calories: 500 },
  { id: 3, name: 'Cannelloni', price: 4, calories: 500 },
];
