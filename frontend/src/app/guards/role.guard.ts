import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

// chroni trasy dostępne tylko dla określonej roli (np. bileter)
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    if (this.authService.hasRole(expectedRole)) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
