import {Component} from '@angular/core';

@Component({
  template: ''
})
export class BaseScrollToTopComponent {

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
