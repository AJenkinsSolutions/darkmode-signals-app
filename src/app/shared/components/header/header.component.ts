import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ThemeService } from '../../../services/theme.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  
  themeService: ThemeService = inject(ThemeService);

  //Flips the dark mode switch
  //No parameter needed
  toggleTheme(){
    this.themeService.updateTheme()
  }
}
