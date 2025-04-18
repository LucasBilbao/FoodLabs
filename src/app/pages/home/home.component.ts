import {Component, OnInit, signal} from '@angular/core';
import {BgComponent} from '../../components/bg/bg.component';
import {RecipeShort} from '../../interfaces/recipe.interface';
import {RecipeCardsComponent} from '../../components/recipe-cards/recipe-cards.component';
import {Observable, of} from 'rxjs';
import {RecipesService} from '../../services/recipes.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'fl-home',
  imports: [BgComponent, RecipeCardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public newestRecipes$ = signal<Observable<RecipeShort[] | null>>(of(null));

  constructor(private recipesService: RecipesService) {
    recipesService.getRecipes({ limit: 3, page: 1 });
  }

  public ngOnInit(): void {
    this.newestRecipes$.set(this.recipesService.recipes$);
  }
}
