import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Tag} from '../../interfaces/tag.interface';
import {Observable, of} from 'rxjs';
import {TagsService} from '../../services/tags.service';
import {TagComponent} from './tag/tag.component';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseSubscribableComponent} from '../../shared/base-subscribable.component';

@Component({
  selector: 'fl-tags',
  imports: [CommonModule, TagComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent extends BaseSubscribableComponent implements OnInit {
  public tags$ = signal<Observable<Tag[]>>(of([]));

  constructor(public tagsService: TagsService, private router: Router, private activatedRoute: ActivatedRoute) {
    super();
    tagsService.getTags();
  }

  ngOnInit() {
    this.tags$.set(this.tagsService.tags$);
  }
}
