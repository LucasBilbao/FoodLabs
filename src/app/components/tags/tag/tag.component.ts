import {Component, computed, input, signal} from '@angular/core';
import {Tag} from '../../../interfaces/tag.interface';
import {BaseSubscribableComponent} from '../../../shared/base-subscribable.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'fl-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent extends BaseSubscribableComponent {
  public tag = input.required<Tag>();
  public selectedTags = signal<Set<string>>(new Set());
  public isSelected = computed(() => {
    console.log(this.selectedTags().has(this.tag().name))
    return this.selectedTags().has(this.tag().name)
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    super();
    this.addSubscription(activatedRoute.queryParams.subscribe(({tags}) => {
      const tagsSet = new Set<string>(tags || []);
      this.selectedTags.set(tagsSet);
    }))
  }

  public onTagClick() {
    this.toggleTag(this.tag().name);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {tags : [ ...this.selectedTags()]},
      queryParamsHandling: 'replace',
    })
  }

  toggleTag(tag: string) {
    if(this.selectedTags().has(tag)) {
      this.selectedTags().delete(tag);
    } else {
      this.selectedTags().add(tag);
    }
  }
}
