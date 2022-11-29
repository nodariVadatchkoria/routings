import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './../services/authorization.service';


@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(
    private AuthorizationService: AuthorizationService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state);
    return this.AuthorizationService.isAuthenticated;
  }

}
