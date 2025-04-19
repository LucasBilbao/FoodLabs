import {Component, OnInit, signal} from '@angular/core';
import {BgComponent} from '../../components/bg/bg.component';
import {RecipeLong} from '../../interfaces/recipe.interface';
import {Observable, of} from 'rxjs';
import {RecipesService} from '../../services/recipes.service';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {BaseSubscribableComponent} from '../../shared/base-subscribable.component';
import {IngredientComponent} from '../../components/ingredient/ingredient.component';
import {RecipesFacade} from '../../facades/recipes.facade';
import {LoaderComponent} from '../../components/loader/loader.component';

@Component({
  selector: 'fl-recipe',
  imports: [BgComponent, CommonModule, IngredientComponent, LoaderComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent extends BaseSubscribableComponent implements OnInit {
  public recipe$ = signal<Observable<RecipeLong | null>>(of(null));
  public isLoading$ = signal<Observable<boolean>>(of(false));

  constructor(private recipesService: RecipesService, recipesFacade: RecipesFacade, activatedRoute: ActivatedRoute) {
    super();
    this.isLoading$.set(recipesFacade.isLoading$);
    this.addSubscription(activatedRoute.params.subscribe(({ id }) => {
      recipesService.getRecipe(id);
    }))
  }

  public ngOnInit(): void {
    this.recipe$.set(this.recipesService.recipe$);
  }
}
