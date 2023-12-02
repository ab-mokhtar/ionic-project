// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FireBaseService } from './fire-base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: FireBaseService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.checkIsAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect to the login page if not authenticated
      return false;
    }
  }
}
