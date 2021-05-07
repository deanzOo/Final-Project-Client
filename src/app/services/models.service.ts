import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client/client';
import { StorageService } from '../storage.service';
import { ApiAccessService } from '../api-access.service';
import { HTTP_METHODS, MODELS_ENDPOINTS, USER_ENDPOINTS } from '../models/types';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Model } from '../models/models/models';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  models: Model[];
  activeModel: Model;

  constructor(
    private storage: StorageService,
    private api: ApiAccessService
  ) { }

  get(): Observable<Model[]> {
    return this.api.request({
      method: HTTP_METHODS.GET,
      endpoint: MODELS_ENDPOINTS.GET_SET
    }).pipe(tap((types: any) => {
      this.models = types && types instanceof Array ? types : [];
    }));
  }

  getActive(): Observable<Model[]> {
    return this.api.request({
      method: HTTP_METHODS.GET,
      endpoint: MODELS_ENDPOINTS.GET_ACTIVE
    }).pipe(tap((model: Model[]) => {
      this.activeModel = model[0];
    }));
  }

  set(id: number) {
    return new Promise((resolve, reject) => {
      this.api.request({
        method: HTTP_METHODS.POST,
        endpoint: MODELS_ENDPOINTS.GET_SET,
        body: { id }
      }).subscribe(() => {
        resolve();
      }, err => {
        this.models = null;
        reject();
      });
    });
  }
}
