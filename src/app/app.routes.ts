import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ReservationpageComponent } from './reservationpage/reservationpage.component';
import { TestPageComponent } from './test-page/test-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'reservation',
    component: ReservationpageComponent,
  },
  {
    path: 'test',
    component: TestPageComponent,
  },
];
