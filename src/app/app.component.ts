import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {BaseScrollToTopComponent} from './shared/base-scroll-to-top.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'fl-root',
  imports: [HeaderComponent, RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BaseScrollToTopComponent{}
