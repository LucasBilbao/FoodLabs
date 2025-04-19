import {RecipesService} from '../services/recipes.service';
import {TagsService} from '../services/tags.service';
import {Injectable} from '@angular/core';
import {combineLatest, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesFacade {
  public isLoading$ ;


  constructor(private recipesService: RecipesService, private tagsService: TagsService) {
    this.isLoading$ = combineLatest({recipes: recipesService.isLoading$, tags: tagsService.isLoading$})
      .pipe(map(res => {
        return res.recipes || res.tags
      }));
  }
}
