import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
// modules Angular Materials :
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface recipe {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  description: string;
  allergens: string[] | null;
  isAllergenToggle: boolean;
  isLiked: boolean;
}
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    MatButtonModule,
    MatIcon,
    MatSnackBarModule,
    CardComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  recipes: recipe[] = [
    {
      id: 1,
      name: 'Salade Grecque',
      type: 'starter',
      image:
        'https://ffcuisine.fr/wp-content/uploads/2024/09/1725751112_conseils-de-cyril-lignac-pour-une-salade-grecque-parfaite-astuces-et-recette-1.jpg',
      price: 8.5,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',

      allergens: ['lactose'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Soupe à l'oignon",
      type: 'starter',
      image:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/8809c8fe-2ac0-4aa8-8fd8-afec23cf58ab/Derivates/3b7c4d8a-2172-4929-8e47-9c1b5962ab82.jpg',
      price: 7.0,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ['gluten'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 3,
      name: 'Bruschetta',
      type: 'starter',
      image:
        'https://c.ndtvimg.com/p11dm6bg_bruschetta_625x300_04_September_18.jpg',
      price: 6.5,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ['gluten', 'lactose'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 4,
      name: 'Dahl de lentilles',
      type: 'main',
      image:
        'https://www.francoislambert.one/cdn/shop/articles/dahl_indien_lentilles_vertes.webp?v=1700962226',
      price: 18.0,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ['lactose'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 5,
      name: 'Burger Falafel',
      type: 'main',
      image:
        'https://assets.biggreenegg.eu/app/uploads/2021/03/05090934/topimage-vega-falafelburger-2021m03-800x533-1.jpg',
      price: 16.5,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ['lactose', 'gluten', 'moutarde'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 6,
      name: 'Ratatouille',
      type: 'main',
      image:
        'https://lille.compagnonsdessaisons.com/wp-content/uploads/2022/04/healthy-vegetarian-lunch-stewed-garden-vegetables-vegetable-ratatouille.jpg',
      price: 15.0,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ["Pas d'allergene"],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 7,
      name: 'Risotto aux champignons',
      type: 'main',
      image:
        'https://www.arcticgardens.ca/media/uploads/recipes/risotto_de_choux-fleurs_champignons.jpg.1200x627_q64.jpg',
      price: 17.5,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ['lactose', 'sulfites'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 8,
      name: 'Lasagne chèvre-épinards',
      type: 'main',
      image:
        'https://www.laurentmariotte.com/wp-content/uploads/2023/09/lasagne-saumon-epinard.jpeg',
      price: 19.0,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ['gluten', 'lactose'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 9,
      name: 'Pizza Margherita',
      type: 'main',
      image:
        'https://fac.img.pmdstatic.net/fit/~1~fac~2023~05~17~474f4374-13bf-4f25-bde2-77b675e6d70b.jpeg/1200x1200/quality/80/crop-from/center/margherita-julie-andrieu-revele-ses-secrets-pour-reussir-cette-pizza-napolitaine.jpeg',
      price: 14.0,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ['gluten', 'lactose'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 10,
      name: 'Tiramisu',
      type: 'dessert',
      image:
        'https://ffcuisine.fr/wp-content/uploads/2024/06/1717801337_recette-facile-de-tiramisu-sans-mascarpone-decouvrez-comment-le-reussir.jpg',
      price: 6.0,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',

      allergens: ['gluten', 'lactose', 'oeuf'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 11,
      name: 'Crème brûlée',
      type: 'dessert',
      image:
        'https://www.markal.fr/application/files/medias_markal/recettes/988-recette-creme-brulee.jpg',
      price: 5.5,
      description:
        'On peut ici ajouter une description du plat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ',
      allergens: ['lactose', 'oeuf'],
      isAllergenToggle: false,
      isLiked: false,
    },
    {
      id: 12,
      name: 'Fondant au chocolat',
      type: 'dessert',
      image:
        'https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2019-12/1575898110_fondant-au-chocolat.jpg',
      price: 6.5,
      description:
        'On peut ici ajouter une description du plat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  ',
      allergens: ['lactose', 'gluten', 'oeuf'],
      isAllergenToggle: false,
      isLiked: false,
    },
  ];

  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
}
