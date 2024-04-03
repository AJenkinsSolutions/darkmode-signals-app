import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  themeSignal = signal<string>('dark')

  setTheme(theme: string): void{

    this.themeSignal.set(theme);

  }

  updateTheme(): void{
    this.themeSignal.update((currentValue) => currentValue === 'dark' ? 'light': 'dark');
  }
 
}
