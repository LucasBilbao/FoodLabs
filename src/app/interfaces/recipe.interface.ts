import {Ingredient} from './ingredient.interface';
import {Tag} from './tag.interface';

export interface RecipeShort {
  id: string
  title: string;
  description: string;
  imgUrl: string;
  tags: Tag[];
}

export interface RecipeLong extends RecipeShort{
  ingredients: Ingredient[];
  instructions: string[];
}

export interface RecipesResponse {
  recipes: RecipeShort[];
  total: number;
}
