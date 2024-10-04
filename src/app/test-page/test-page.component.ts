import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
})
export class TestPageComponent {}
