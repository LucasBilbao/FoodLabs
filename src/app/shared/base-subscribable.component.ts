import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {BaseScrollToTopComponent} from './base-scroll-to-top.component';

@Component({
  template: ''
})
export abstract class BaseSubscribableComponent extends BaseScrollToTopComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  public addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
