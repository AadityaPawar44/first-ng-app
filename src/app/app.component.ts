import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent],
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-header></app-header>
    <app-home></app-home>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'first-ng-app';
}
