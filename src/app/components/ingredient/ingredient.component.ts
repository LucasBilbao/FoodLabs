import {Component, computed, input} from '@angular/core';
import {Ingredient} from '../../interfaces/ingredient.interface';
import Fraction from 'fraction.js';

@Component({
  selector: 'fl-ingredient',
  imports: [],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss'
})
export class IngredientComponent {
  public ingredient = input.required<Ingredient>();
  public quantity = computed(() => new Fraction(this.ingredient().quantity).toFraction(true));
}
