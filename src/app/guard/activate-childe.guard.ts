import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateChildeGuard implements CanActivateChild {
  constructor(
    private AuthorizationService: AuthorizationService
  ) {
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AuthorizationService.isAuthenticated;
  }

}
