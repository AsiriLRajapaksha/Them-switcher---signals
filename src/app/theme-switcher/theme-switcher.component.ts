import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  templateUrl: './theme-switcher.component.html'
})
export class ThemeSwitcherComponent {
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    this.applyTheme();
  }

  toggleTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    const isDark = this.theme() === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
  }
}