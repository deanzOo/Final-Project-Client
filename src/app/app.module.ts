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
import { ClientAuthModalComponent } from './client/login-modal/client-auth-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientProfilePageComponent } from './client/client-profile/client-profile-page.component';
import { MatRadioModule } from '@angular/material/radio';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AuthService } from './services/auth.service';
import { UserResolver } from './resolvers/users.resolver';
import { UsersService } from './services/users.service';
import { LogosService } from './services/logos.service';
import { LogosResolver } from './resolvers/logos.resolver';
import { IvyGalleryModule } from 'angular-gallery';
import { LoadingService } from './services/loading.service';
import { LogoCardComponent } from './client/client-profile/logo-card/logo-card.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { DashboardResolver } from './resolvers/dashboard.resolver';
import { AdminService } from './services/admin.service';
import { MyLogosResolver } from './resolvers/myLogos.resolver';
import { GalleryComponent } from './client/gallery/gallery.component';
import { RateLogoComponent } from './client/gallery/rate-logo/rate-logo.component';

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
    ClientAuthModalComponent,
    ClientProfilePageComponent,
    LogoCardComponent,
    GalleryComponent,
    RateLogoComponent
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
      positionClass: 'toast-top-right'
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
    ModalModule.forRoot(),
    MatRadioModule,
    PerfectScrollbarModule,
    IvyGalleryModule,
    BarRatingModule
  ],
  providers: [
    AuthService,
    UsersService,
    UserResolver,
    LogosService,
    LogosResolver,
    MyLogosResolver,
    LoadingService,
    DashboardResolver,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
