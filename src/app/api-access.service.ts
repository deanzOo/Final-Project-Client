import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRequest } from './models/types';
import { environment } from '../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {
  constructor(private httpClient: HttpClient, private storage: StorageService) {
  }

  public request<T>(apiRequestDetails: ApiRequest): Observable<T> {
    const headers = {...apiRequestDetails.params, ...{'Content-Type': 'application/json'}};
    if (this.storage.getItem('Authorization')) {
      headers.Authorization = this.storage.getItem('Authorization');
    }
    return this.httpClient.request<T>(
      apiRequestDetails.method,
      environment.apiUrl + apiRequestDetails.endpoint,
      {
        body: apiRequestDetails.body,
        params: apiRequestDetails.params,
        headers
      }
    );
  }
}
