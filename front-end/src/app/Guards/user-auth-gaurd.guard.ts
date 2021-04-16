import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAccessServiceService } from '../modules/user layout/access/services/user-access-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGaurdGuard implements CanActivate {
  constructor(private userAuthService:UserAccessServiceService , private _Router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.userAuthService.isLoggedIn()) {
        return true;
      } else {
        this._Router.navigate(["login"]);///user login page
        return false;
      }
  }

}
