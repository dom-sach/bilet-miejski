import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {AuthService} from './core/services/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatButtonModule, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getUsername(): string {
    const user = this.authService.getCurrentUser();
    return user ? user.username : '';
  }

  loginTest() {
    // Przykładowy token + dane użytkownika
    const fakeToken = 'FAKE_TEST_TOKEN';
    const fakeUser = {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      roles: ['PASSENGER']
    };

    // Zapisujemy do localStorage (tak samo jak AuthService normalnie robi)
    localStorage.setItem('token', fakeToken);
    localStorage.setItem('user', JSON.stringify(fakeUser));

    alert('Zalogowano jako testuser (PASSENGER)');
  }

  logoutTest() {
    this.authService.logout();
    alert('Wylogowano.');
  }
}
