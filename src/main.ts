import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ThemeSwitcherComponent } from './app/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  template: `<app-theme-switcher></app-theme-switcher>`
})
export class App {
}

bootstrapApplication(App);