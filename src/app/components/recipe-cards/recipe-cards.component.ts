import { Component, input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@Component({
  selector: 'fl-recipe-cards',
  imports: [RecipeCardComponent],
  templateUrl: './recipe-cards.component.html',
  styleUrl: './recipe-cards.component.scss',
})
export class RecipeCardsComponent {
  public recipes = input.required<Recipe[]>();
}
