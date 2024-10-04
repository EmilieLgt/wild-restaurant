import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIcon, MatChipsModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() recipe: any;

  constructor(private _snackBar: MatSnackBar) {}

  // afficher/masquer les allergènes
  toggleAllergens() {
    this.recipe.isAllergenToggle = !this.recipe.isAllergenToggle;
  }

  // like/dislike un plat, et message affiché/position dans la snackbar
  toggleLike() {
    this.recipe.isLiked = !this.recipe.isLiked;
    const message = this.recipe.isLiked
      ? `${this.recipe.name} ajouté aux favoris !`
      : `${this.recipe.name} retiré des favoris !`;

    this._snackBar.open(message, 'Fermer', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
