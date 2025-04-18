import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import('./pages/recipe/recipe.component').then((m) => m.RecipeComponent),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./pages/search-results/search-results.component').then(
        (m) => m.SearchResultsComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
