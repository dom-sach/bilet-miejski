import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NavbarComponent} from './features/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatButtonModule, MatCardModule, NavbarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
