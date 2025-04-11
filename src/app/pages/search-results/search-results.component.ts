import { Component, signal } from '@angular/core';
import { RecipeCardsComponent } from '../../components/recipe-cards/recipe-cards.component';
import { Recipe } from '../../interfaces/recipe.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'fl-search-results',
  imports: [RecipeCardsComponent, MatPaginatorModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  public recipes = signal<Recipe[]>([
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
    {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich meat sauce.',
      imgUrl:
        'https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-10.jpg?not-from-cache-please',
    },
  ]);

  // TODO: implement pagination on load and fetch the adequate data
  handlePageEvent(e: PageEvent) {}
}
