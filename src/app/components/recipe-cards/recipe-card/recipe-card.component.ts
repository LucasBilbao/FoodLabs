import { Component, input } from '@angular/core';
import { RecipeShort } from '../../../interfaces/recipe.interface';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fl-recipe-card',
  imports: [TruncatePipe, RouterLink],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  public recipe = input.required<RecipeShort>();
}
