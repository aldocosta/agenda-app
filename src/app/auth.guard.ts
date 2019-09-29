import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Constants } from './config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constants: Constants = new Constants
  /**
   *
   */
  constructor(private http: HttpClient) {


  }
  canActivate(): boolean {
    let token = JSON.parse(localStorage.getItem('token')).data
    return token != null && token != 'undefined'
  }

}
