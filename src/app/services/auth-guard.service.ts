import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService) {}

  CanActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}
