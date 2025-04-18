import {CommonModule} from '@angular/common';
import {Component, computed, input} from '@angular/core';

@Component({
  selector: 'fl-bg',
  imports: [CommonModule],
  templateUrl: './bg.component.html',
  styleUrl: './bg.component.scss',
})
export class BgComponent {
  public bgImg = input<string | null>(
    'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMG9uJTIwdGFibGV8ZW58MHx8MHx8fDA%3D'
  );
  public title = input<string>('Find and Share your favorite recipes!');
  public background = computed(
    () => `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(${this.bgImg()}) no-repeat center center/cover`
  );
}
