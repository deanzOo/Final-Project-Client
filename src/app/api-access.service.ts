import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRequest } from './models/types';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {
  token: string;
  constructor(private httpClient: HttpClient) {
  }

  public request<T>(apiRequestDetails: ApiRequest): Observable<T> {
    return this.httpClient.request<T>(
      apiRequestDetails.method,
      environment.apiUrl + apiRequestDetails.endpoint,
      {
        body: apiRequestDetails.body,
        headers: apiRequestDetails.params
      }
    );
  }

}
