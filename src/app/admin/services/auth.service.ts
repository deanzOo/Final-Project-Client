import { Injectable } from '@angular/core';
import { ApiAccessService } from '../../api-access.service';
import { ADMIN_AUTH_ENDPOINTS, HTTP_METHODS } from '../../models/types';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  currentUser = new BehaviorSubject<any>(null); //todo implement type Admin

  constructor(private apiService: ApiAccessService,
              private storageService: StorageService) { }

  login(userName: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.apiService.request({
        method: HTTP_METHODS.POST,
        endpoint: ADMIN_AUTH_ENDPOINTS.LOGIN,
        body: {userName, password}
      }).subscribe((res: { token: string, user: any }) => {
        this.loggedIn = true;
        this.currentUser = res.user;
        this.storageService.setItem('auth_key', res.token);
        resolve();
      }, err => {
        this.storageService.removeItem('auth_key');
        reject(err);
      });
    });
  }

  authenticate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      return this.apiService.request({
        method: HTTP_METHODS.GET,
        endpoint: ADMIN_AUTH_ENDPOINTS.AUTHENTICATE,
        params: {auth_key: this.storageService.getItem('auth_key')}
      }).subscribe((res: { user: any }) => {
        this.loggedIn = true;
        this.currentUser = res.user;
        resolve();
      }, err => {
        this.storageService.removeItem('auth_key');
        reject(err);
      });
    });
  }
}
