import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from '../../models/client/client';
import { StorageService } from '../../storage.service';
import { ApiAccessService } from '../../api-access.service';
import { Router } from '@angular/router';
import { CLIENT_AUTH_ENDPOINTS, HTTP_METHODS } from '../../models/types';
import { LoginRequest, RegisterRequest } from '../../models/client/requests';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthService {
  loggedIn = false;
  currentUser = new BehaviorSubject<Client>(null);

  constructor(
    private storage: StorageService,
    private api: ApiAccessService,
    private router: Router
  ) { }

  login(data: LoginRequest) {
    return new Promise((resolve, reject) => {
      this.api.request({
        method: HTTP_METHODS.GET,
        endpoint: CLIENT_AUTH_ENDPOINTS.LOGIN,
        body: data
      }).subscribe((response: Client) => {
        if (response.token) {
          this.storage.setItem('Authorization', response.token);
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

  register(data: RegisterRequest) {
    return new Promise((resolve, reject) => {
      this.api.request({
        method: HTTP_METHODS.GET,
        endpoint: CLIENT_AUTH_ENDPOINTS.REGISTER,
        body: data
      }).subscribe((response: Client) => {
        if (response.token) {
          this.storage.setItem('Authorization', response.token);
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
    this.storage.removeItem('token');
    this.currentUser.next(null);
    this.router.navigate(['/']);
  }
}

