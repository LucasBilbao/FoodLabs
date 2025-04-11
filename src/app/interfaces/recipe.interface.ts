import { Ingredient } from './ingredient.interface';

export interface Recipe {
  ingredients?: Ingredient[];
  instructions?: string[];
  title: string;
  description: string;
  imgUrl: string;
  category?: string;
}
