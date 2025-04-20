import {Component, computed} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'fl-header',
  imports: [MatIconModule, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public searchForm = new FormGroup({
    search: new FormControl('')
  });
  public searchValue = toSignal(this.searchForm.controls.search.valueChanges, {
    initialValue: this.searchForm.controls.search.value
  });

  public isClearable = computed(() => this.searchValue() && this.searchValue() !== '');

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(({search}) => {
      this.searchForm.controls.search.setValue(search);
    })
  }

  public onClearSearch(){
    this.searchForm.reset();
    this.search();
  }

  public search() {
    let { tags } = this.activatedRoute.snapshot.queryParams;

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {tags, search: this.searchValue() || ''},
      queryParamsHandling: 'replace',
    })
  }


  public onSubmit(event: Event) {
    event.preventDefault();

    this.search();
  }
}
