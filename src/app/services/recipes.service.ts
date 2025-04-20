import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeLong, RecipeShort, RecipesResponse} from '../interfaces/recipe.interface';
import {BehaviorSubject, debounceTime, Observable, Subject} from 'rxjs';
import {UriBuilder} from '../utils/uriBuilder';
import {GetRecipesQueries} from '../interfaces/getRecipesQueries.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes$$: BehaviorSubject<RecipeShort[]> = new BehaviorSubject<RecipeShort[]>([]);
  private recipe$$: Subject<RecipeLong> = new Subject<RecipeLong>();
  private total$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  public get isLoading$(): Observable<boolean> {
    return this.isLoading$$.asObservable();
  }

  public set isLoading$(value: boolean) {
    this.isLoading$$.next(value);
  }

  public get recipes$(): Observable<RecipeShort[]> {
    return this.recipes$$.asObservable();
  }

  public set recipes$(value: RecipeShort[]) {
    this.recipes$$.next(value);
  }

  public get recipe$(): Observable<RecipeLong> {
    return this.recipe$$.asObservable();
  }

  public get total$(): Observable<number> {
    return this.total$$.asObservable();
  }

  public set total$(value: number) {
    this.total$$.next(value);
  }

  public getRecipes(queries: GetRecipesQueries = { limit: 12, page: 1, tags: undefined, search: '' })  {
    queries.page = queries.page || 1;
    queries.limit = queries.limit || 12;
    queries.tags = queries.tags || undefined;
    queries.search = queries.search || '';

    this.isLoading$$.next(true);
    const uri = new UriBuilder().setPath('').setParameters<GetRecipesQueries>(queries).get();
    this.http.get<RecipesResponse>(uri).pipe(debounceTime(1000)).subscribe(({recipes, total}) => {
      this.isLoading$$.next(false);
      this.recipes$$.next(recipes);
      this.total$$.next(total);
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
