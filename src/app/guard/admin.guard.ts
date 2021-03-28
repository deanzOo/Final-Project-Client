import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Client } from '../models/client/client';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private toastr: ToastrService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    if (!this.authService.loggedIn) {
      return this.authService.login().then((res: Client) => {
        if (res.isAdmin) {
          return true;
        }
        this.toastr.error('הגישה נדחתה');
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        return false;
      });
    }
    if (this.authService.currentUser.value.isAdmin) {
      return true;
    }
    this.toastr.error('הגישה נדחתה');
    this.router.navigate(['/']);
    return false;
  }
}
