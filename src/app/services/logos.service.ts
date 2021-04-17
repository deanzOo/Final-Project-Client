import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { ApiAccessService } from '../api-access.service';
import { HTTP_METHODS, LOGOS_ENDPOINTS } from '../models/types';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Logo, Rate } from '../models/logos/logos';

@Injectable({
  providedIn: 'root'
})
export class LogosService {
  logos: Logo[];

  constructor(
    private storage: StorageService,
    private api: ApiAccessService
  ) { }

  get(params?: any): Observable<Logo[]> {
    return this.api.request({
      method: HTTP_METHODS.GET,
      endpoint: LOGOS_ENDPOINTS.GET_CREATE,
      params
    }).pipe(tap((types: any) => {
      this.logos = types && types instanceof Array ? types : [];
    }));
  }

  create(): Promise<Logo[]> {
    return new Promise((resolve, reject) => {
      this.api.request({
        method: HTTP_METHODS.POST,
        endpoint: LOGOS_ENDPOINTS.GET_CREATE
      }).subscribe((response: Logo[]) => {
        resolve(response);
      }, err => {
        reject(err);
      });
    });
  }

  rate(rate: Rate): Promise<Rate[]> {
    return new Promise((resolve, reject) => {
      this.api.request({
        method: HTTP_METHODS.POST,
        endpoint: LOGOS_ENDPOINTS.RATE,
        body: rate
      }).subscribe((response: Rate[]) => {
        resolve(response);
      }, err => {
        reject(err);
      });
    });
  }

  save(id: number): Promise<null> {
    return new Promise((resolve, reject) => {
      this.api.request({
        method: HTTP_METHODS.POST,
        endpoint: LOGOS_ENDPOINTS.SAVE,
        body: {logo_id: id}
      }).subscribe(() => {
        resolve();
      }, err => {
        reject(err);
      });
    });
  }

}
