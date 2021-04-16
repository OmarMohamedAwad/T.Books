import { AdminLoginService } from 'src/app/services/admin-login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private adminService:AdminLoginService , private _Router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.adminService.isLoggedIn()) {
        return true;
      } else {
        this._Router.navigate(["admin/login"]);///admin login page
        return false;
  }
}
}
