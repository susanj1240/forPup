import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router){}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean{
    
    //if the user is not logged in or registered --> direct to login page
    if(!this.authService.isUserAuthenticated){
      this.router.navigateByUrl('/login');
    }
    return this.authService.isUserAuthenticated;
  }
  
}
