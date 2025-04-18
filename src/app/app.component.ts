import {Component, OnInit, signal} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {BaseScrollToTopComponent} from './shared/base-scroll-to-top.component';
import {LoaderComponent} from './components/loader/loader.component';
import {Observable, of} from 'rxjs';
import {RecipesService} from './services/recipes.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'fl-root',
  imports: [HeaderComponent, RouterOutlet, MatIconModule, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BaseScrollToTopComponent implements OnInit{
  public isLoading$ = signal<Observable<boolean>>(of(false));

  constructor(private recipesService: RecipesService) {
    super();
  }

  public ngOnInit(): void {
    this.isLoading$.set(this.recipesService.isLoading$);
  }
}
