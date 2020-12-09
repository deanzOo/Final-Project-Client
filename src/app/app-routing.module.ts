import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ModelsComponent } from './admin/main/models/models.component';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/main/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin/main/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'main',
        component: AdminLayoutComponent,
        canActivate: [AdminGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'models',
            component: ModelsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
