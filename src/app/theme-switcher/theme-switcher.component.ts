import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  template: `
    <div
      class="min-h-screen flex flex-col items-center justify-center 
      transition-all duration-500 ease-in-out
      bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 
      dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white"
    >
      <h1 class="text-4xl font-bold mb-6 drop-shadow-md">
        Angular Signals - Dynamic Theme Switcher
      </h1>

      <button
        (click)="toggleTheme()"
        class="px-6 py-3 rounded-lg bg-blue-600 text-white dark:bg-yellow-400 dark:text-black 
        font-semibold transition-transform transform hover:scale-110 shadow-lg"
      >
        Toggle Theme 🌗
      </button>

      <p class="mt-4 text-lg font-medium">
        Current Theme: <span class="font-bold underline">{{ theme() }}</span>
      </p>
    </div>
  `
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