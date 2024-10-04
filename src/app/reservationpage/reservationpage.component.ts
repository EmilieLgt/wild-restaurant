import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

// modules Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

interface Reservation {
  name?: string;
  date?: Date;
  slot?: string;
  phone?: number;
  people?: number;
}
@Component({
  selector: 'app-reservaptionpage',
  templateUrl: './reservationpage.component.html',
  styleUrl: './reservationpage.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
})
export class ReservationpageComponent {
  // initialisation d'un objet vide pour récupérer par la suite les infos de réservation
  reservation: Reservation = {};

  // pour la navigaiton reotur page manue
  router: Router = inject(Router);
  navigateToMenu() {
    this.router.navigate(['/']);
  }
  // pour le formulaire (navigation et validation)
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    slot: ['', Validators.required],
    date: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    people: ['', Validators.required],
  });

  isLinear = false;
}
