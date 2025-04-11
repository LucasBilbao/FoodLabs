import { Component, signal } from '@angular/core';
import { BgComponent } from '../../components/bg/bg.component';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeCardsComponent } from '../../components/recipe-cards/recipe-cards.component';

@Component({
  selector: 'fl-home',
  imports: [BgComponent, RecipeCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public newestRecipes = signal<Recipe[]>([
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://img.taste.com.au/iefuclj7/w1200-h630-cfill/taste/2016/11/spaghetti-bolognese-106560-1.jpeg',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://img.taste.com.au/iefuclj7/w1200-h630-cfill/taste/2016/11/spaghetti-bolognese-106560-1.jpeg',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://img.taste.com.au/iefuclj7/w1200-h630-cfill/taste/2016/11/spaghetti-bolognese-106560-1.jpeg',
    },
  ]);
}
