import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeLong, RecipeShort, RecipesResponse} from '../interfaces/recipe.interface';
import {BehaviorSubject, Observable, skip, Subject} from 'rxjs';
import {UriBuilder} from '../utils/uriBuilder';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  static page: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private recipes$$: BehaviorSubject<RecipeShort[]> = new BehaviorSubject<RecipeShort[]>([]);
  private recipe$$: Subject<RecipeLong> = new Subject<RecipeLong>();
  private total$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    RecipesService.page.pipe(skip(1)).subscribe((page) => {
      this.getRecipes({ page });
    })
  }

  public get isLoading$(): Observable<boolean> {
    return this.isLoading$$.asObservable();
  }

  public get recipes$(): Observable<RecipeShort[]> {
    return this.recipes$$.asObservable();
  }

  public get recipe$(): Observable<RecipeLong> {
    return this.recipe$$.asObservable();
  }

  public get total$(): Observable<number> {
    return this.total$$.asObservable();
  }

  public getRecipes(queries: {limit?: number, page?: number} = { limit: 12, page: 1}): void  {
    queries.limit = queries.limit || 12;
    queries.page = queries.page || 1;
    this.isLoading$$.next(true);
    const uri = new UriBuilder().setPath('').setParameters(queries).get();
    this.http.get<RecipesResponse>(uri).subscribe(({ recipes, total }: RecipesResponse) => {
      this.recipes$$.next(recipes);
      this.total$$.next(total);
      this.isLoading$$.next(false);
    });
  }

  public getRecipe(id: string): void  {
    this.isLoading$$.next(true);
    this.http.get<RecipeLong>(id).subscribe((recipe: RecipeLong) => {
      this.recipe$$.next(recipe);
      this.isLoading$$.next(false);
    });
  }
}
