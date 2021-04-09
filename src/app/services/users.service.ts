import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client/client';
import { StorageService } from '../storage.service';
import { ApiAccessService } from '../api-access.service';
import { HTTP_METHODS, USER_ENDPOINTS } from '../models/types';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Client[];

  constructor(
    private storage: StorageService,
    private api: ApiAccessService,
    private router: Router
  ) { }

  get(): Observable<Client[]> {
    return this.api.request({
      method: HTTP_METHODS.GET,
      endpoint: USER_ENDPOINTS.GET
    }).pipe(tap((types: any) => {
      this.users = types && types instanceof Array ? types : [];
    }));
  }

  update(client: Client) {
    return new Promise((resolve, reject) => {
      if (!this.storage.getItem('Authorization')) {
        reject();
      }
      this.api.request({
        method: HTTP_METHODS.POST,
        endpoint: USER_ENDPOINTS.UPDATE_DELETE,
        body: client
      }).subscribe(() => {
        resolve();
      }, err => {
        this.users = null;
        reject();
      });
    });
  }

  delete(id: number) {
    return new Promise((resolve, reject) => {
      if (!this.storage.getItem('Authorization')) {
        reject();
      }
      this.api.request({
        method: HTTP_METHODS.DELETE,
        endpoint: USER_ENDPOINTS.UPDATE_DELETE,
        params: {id}
      }).subscribe(() => {
        resolve();
      }, err => {
        this.users = null;
        reject();
      });
    });
  }
}
