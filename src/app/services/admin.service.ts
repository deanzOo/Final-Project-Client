import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { ApiAccessService } from '../api-access.service';
import { ADMIN_ENDPOINTS, HTTP_METHODS } from '../models/types';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { DashboardData } from '../models/admin/dashboardItem';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  dashboardData: DashboardData;

  constructor(
    private storage: StorageService,
    private api: ApiAccessService
  ) { }

  getDashboard(): Observable<DashboardData> {
    return this.api.request({
      method: HTTP_METHODS.GET,
      endpoint: ADMIN_ENDPOINTS.GET_DASHBOARD
    }).pipe(tap((data: DashboardData) => {
      this.dashboardData = data ? data : null;
    }));
  }

}
