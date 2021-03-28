import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Client } from '../models/client/client';
import { StorageService } from '../storage.service';
import { ApiAccessService } from '../api-access.service';
import { LoginRequest, RegisterRequest } from '../models/client/requests';
import { AUTH_ENDPOINTS, HTTP_METHODS } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  currentUser = new BehaviorSubject<Client>(null);

  constructor(
    private storage: StorageService,
    private api: ApiAccessService,
    private router: Router
  ) { }

  login(data: LoginRequest = null) {
    return new Promise((resolve, reject) => {
      if (!data && !this.storage.getItem('Authorization')) {
        reject();
      }
      this.api.request({
        method: HTTP_METHODS.POST,
        endpoint: AUTH_ENDPOINTS.LOGIN,
        body: data
      }).subscribe((response: Client) => {
        if (response.session_key) {
          this.storage.setItem('Authorization', response.session_key);
        }
        this.loggedIn = true;
        this.currentUser.next(response);
        resolve(response);
      }, err => {
        this.loggedIn = false;
        this.currentUser.next(null);
        reject(err);
      });
    });
  }

  register(data: RegisterRequest) {
    return new Promise((resolve, reject) => {
      this.api.request({
        method: HTTP_METHODS.POST,
        endpoint: AUTH_ENDPOINTS.REGISTER,
        body: data
      }).subscribe((response: Client) => {
        if (response.session_key) {
          this.storage.setItem('Authorization', response.session_key);
        }
        this.loggedIn = true;
        this.currentUser.next(response);
        resolve(this.loggedIn);
      }, err => {
        this.loggedIn = false;
        this.currentUser.next(null);
        reject(err);
      });
    });
  }

  logout() {
    this.loggedIn = false;
    this.storage.removeItem('Authorization');
    this.currentUser.next(null);
    this.router.navigate(['/']);
  }
}
