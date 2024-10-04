import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Wild Restaurant';
  router: Router = inject(Router);
  navigateToMenu() {
    this.router.navigate(['/']);
  }
  navigateToRes() {
    this.router.navigate(['/reservation']);
  }
  navigateToTest() {
    this.router.navigate(['/test']);
  }
}
