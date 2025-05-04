import {Component, OnDestroy, OnInit, signal} from '@angular/core';

@Component({
  selector: 'fl-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit, OnDestroy {
  public isLoadingForLong = signal<boolean>(false);

    ngOnInit(): void {
      setTimeout(() => {
        this.isLoadingForLong.set(true);
      }, 1.5 * 1000);
    }

    ngOnDestroy(): void {
      this.isLoadingForLong.set(false);
    }

}
