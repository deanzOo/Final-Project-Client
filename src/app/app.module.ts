import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminLayoutComponent } from './admin/main/admin-layout/admin-layout.component';
import { ModelsComponent } from './admin/main/models/models.component';
import { LoginComponent } from './admin/login/login.component';
import { MainComponent } from './admin/main/main.component';
import { DashboardItemComponent } from './admin/main/dashboard/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './admin/main/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './admin/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardChartComponent } from './admin/main/dashboard/dashboard-chart/dashboard-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { UsersComponent } from './admin/main/users/users.component';
import { ClientComponent } from './client/client.component';
import { ClientMainComponent } from './client/client-layout/client-main/client-main.component';
import { ClientHeaderComponent } from './client/client-layout/client-header/client-header.component';
import { ClientFooterComponent } from './client/client-layout/client-footer/client-footer.component';
import { LoginModalComponent } from './client/login-modal/login-modal.component';
import { RegisterModalComponent } from './client/register-modal/register-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardItemComponent,
    AdminLayoutComponent,
    ModelsComponent,
    DashboardComponent,
    LoginComponent,
    MainComponent,
    DashboardChartComponent,
    UsersComponent,
    ClientComponent,
    ClientMainComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    LoginModalComponent,
    RegisterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-left'
    }),
    HttpClientModule,
    GoogleChartsModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
