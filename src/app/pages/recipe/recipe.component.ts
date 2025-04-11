import { Component, input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { BgComponent } from '../../components/bg/bg.component';

@Component({
  selector: 'fl-recipe',
  imports: [BgComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  public recipe = input<Recipe>({
    title: 'Spaghetti Bolognese',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos laudantium reprehenderit excepturi quis voluptatem, molestiae a repudiandae quasi sequi eos officia nihil esse sit dolorem nesciunt similique ad ipsam. Atque eaque nobis ut inventore commodi illo aliquid placeat odio id ab dolor, cum a sed suscipit hic quia ex at nostrum, rem, veritatis corrupti? Distinctio odio ratione ab aspernatur. Fugiat fuga eveniet reiciendis eaque neque aspernatur tempore veniam facere. Voluptate officia ratione obcaecati fugit laboriosam reprehenderit, atque modi repudiandae ea animi molestiae architecto, quam ducimus possimus inventore iusto veritatis. Impedit cum quibusdam, et itaque quisquam sed non odit voluptate laudantium molestiae alias reiciendis at beatae dolores eius ad libero voluptatum. Ipsa harum culpa numquam quasi expedita nobis voluptatum amet! Magni porro delectus quasi, quo neque reiciendis ratione est minus praesentium. Obcaecati omnis voluptate sed minus reprehenderit corrupti illum ut suscipit aliquam aspernatur quia, laborum cumque amet. Odio, reiciendis? Ab.',
    ingredients: [
      { name: 'Spaghetti', quantity: '200', unit: 'g' },
      { name: 'Ground beef', quantity: '500', unit: 'g' },
      { name: 'Tomato sauce', quantity: '400', unit: 'g' },
      { name: 'Onion', quantity: '1', unit: 'unit' },
      { name: 'Garlic', quantity: '2', unit: 'cloves' },
    ],
    instructions: [
      'Cook spaghetti according to package instructions.',
      'In a pan, sauté onion and garlic until translucent.',
      'Add ground beef and cook until browned.',
      'Stir in tomato sauce and simmer for 10 minutes.',
      'Serve sauce over spaghetti.',
    ],
    imgUrl:
      'https://img.taste.com.au/iefuclj7/w1200-h630-cfill/taste/2016/11/spaghetti-bolognese-106560-1.jpeg',
  });
}
