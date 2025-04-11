import { Component, input } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe.interface';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

@Component({
  selector: 'fl-recipe-card',
  imports: [TruncatePipe],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  public recipe = input.required<Recipe>();
}
