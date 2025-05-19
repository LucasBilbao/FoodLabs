import { Component, OnInit, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable, of } from 'rxjs';
import { RecipesFacade } from '../../facades/recipes.facade';
import { LoaderComponent } from '../../components/loader/loader.component';
import { RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fl-request',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    LoaderComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss',
})
export class RequestComponent implements OnInit {
  public isLoading$ = signal<Observable<boolean>>(of(false));
  public promptForm = new FormGroup({
    prompt: new FormControl(''),
  });

  constructor(
    private recipesFacade: RecipesFacade,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.isLoading$.set(this.recipesFacade.isLoading$);
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    const promptValue = this.promptForm.controls.prompt.value || '';

    this.recipesService.generateRecipe(promptValue).subscribe(({ id }) => {
      this.router.navigate(['/recipe', id]);
    });
  }
}
