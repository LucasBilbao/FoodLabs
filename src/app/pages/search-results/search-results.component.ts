import {Component, OnInit, signal} from '@angular/core';
import {RecipeCardsComponent} from '../../components/recipe-cards/recipe-cards.component';
import {RecipeShort} from '../../interfaces/recipe.interface';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {RecipesService} from '../../services/recipes.service';
import {Observable, of} from 'rxjs';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseSubscribableComponent} from '../../shared/base-subscribable.component';
import {TagsComponent} from '../../components/tags/tags.component';
import {RecipesFacade} from '../../facades/recipes.facade';
import {LoaderComponent} from '../../components/loader/loader.component';

@Component({
  selector: 'fl-search-results',
  imports: [RecipeCardsComponent, MatPaginatorModule, CommonModule, TagsComponent, LoaderComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent extends BaseSubscribableComponent implements OnInit {
  public recipes$ = signal<Observable<RecipeShort[]>>(of([]));
  public total$ = signal<Observable<number>>(of(0));
  public pageIndex = signal(0);
  public isLoading$ = signal<Observable<boolean>>(of(false));

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute, private router: Router, private recipesFacade: RecipesFacade) {
    super();
    this.isLoading$.set(this.recipesFacade.isLoading$);
    this.addSubscription(activatedRoute.queryParams.subscribe(({ page, tags }) => {
      const pageNum = parseInt(page) || 1;
      let finalTags: string | undefined = Array.isArray(tags) && tags.length > 0 ? tags.join(',') : undefined;
      if (typeof tags === 'string') {
        finalTags = tags;
      }
      const { search } = this.activatedRoute.snapshot.queryParams;

      this.pageIndex.set(pageNum - 1);
      this.recipesService.getRecipes({ page: pageNum, tags: finalTags, search });
    }));
  }

  public ngOnInit(): void {
    this.recipes$.set(this.recipesService.recipes$);
    this.total$.set(this.recipesService.total$);
  }

  handlePageEvent(e: PageEvent) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page: e.pageIndex + 1 },
      queryParamsHandling: 'merge',
    }).then(() => this.scrollToTop())
  }
}
