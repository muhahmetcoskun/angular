import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUser: User = new User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.currentUser) {
      //todoAC:yunus rolü yapınca burası ve menü düzenlenecek..
      //if (route.data.roles?.indexOf(this.currentUser.role) === -1) {
        //this.router.navigate(['/401']);
       // return false;
     // }
     //this.router.navigate(['/401']);
      return true;
    }

    this.router.navigate(['/auth/login']);
    return true;
  }

}
