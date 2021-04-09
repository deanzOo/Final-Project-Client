import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ModelsComponent } from './admin/main/models/models.component';
import { DashboardComponent } from './admin/main/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin/main/admin-layout/admin-layout.component';
import { UsersComponent } from './admin/main/users/users.component';
import { ClientComponent } from './client/client.component';
import { ClientMainComponent } from './client/client-layout/client-main/client-main.component';
import { ClientProfilePageComponent } from './client/client-profile/client-profile-page.component';
import { AdminGuard } from './guard/admin.guard';
import { ClientGuard } from './guard/client.guard';
import { UserResolver } from './resolvers/users.resolver';
import { LogosResolver } from './resolvers/logos.resolver';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          {
            path: '',
            component: DashboardComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'models',
            component: ModelsComponent
          },
          {
            path: 'users',
            component: UsersComponent,
            resolve: {
              users: UserResolver
            }
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ClientMainComponent
      },
      {
        path: 'profile',
        canActivate: [ClientGuard],
        component: ClientProfilePageComponent,
        resolve: {
          logos: LogosResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
