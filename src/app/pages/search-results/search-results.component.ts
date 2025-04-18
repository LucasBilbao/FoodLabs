import {Component, OnInit, signal} from '@angular/core';
import {RecipeCardsComponent} from '../../components/recipe-cards/recipe-cards.component';
import {RecipeShort} from '../../interfaces/recipe.interface';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {RecipesService} from '../../services/recipes.service';
import {Observable, of} from 'rxjs';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseSubscribableComponent} from '../../shared/base-subscribable.component';

@Component({
  selector: 'fl-search-results',
  imports: [RecipeCardsComponent, MatPaginatorModule, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent extends BaseSubscribableComponent implements OnInit {
  public recipes$ = signal<Observable<RecipeShort[]>>(of([]));
  public total$ = signal<Observable<number>>(of(0));
  public pageIndex = signal(0);

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute, private router: Router) {
    super();
    this.addSubscription(activatedRoute.queryParams.subscribe(({ page }) => {
      const pageNum = parseInt(page) || 1;
      this.pageIndex.set(pageNum - 1);
      RecipesService.page.next(pageNum);
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
