import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { DashboardData } from '../models/admin/dashboardItem';

@Injectable()
export class DashboardResolver implements Resolve<DashboardData> {

  constructor(private adminService: AdminService) {}

  resolve() {
    return this.adminService.getDashboard();
  }
}
