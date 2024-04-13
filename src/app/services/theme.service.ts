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

  // Uses the update method
  // check current then toggles to oppisite value
  //turney operator  before ? the expression is evaulated, after(? is returned) (): == else)
  updateTheme(): void{
    this.themeSignal.update((currentValue) => currentValue === 'dark' ? 'light': 'dark');
  }
 
}
