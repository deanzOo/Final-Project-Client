import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService,
              private adminAuthService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(userName: string, password: string): void {
    this.adminAuthService.login(userName, password).then(res => {
      console.log(res);
      this.router.navigate(['/admin/login']);
    }, err => {
      this.toastr.error('Error');
      this.router.navigate(['/admin/main/dashboard']);
    });
  }

  showToast(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
