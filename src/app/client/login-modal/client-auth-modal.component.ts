import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client/client';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ToastrService } from 'ngx-toastr';
import { RegisterRequest } from '../../models/client/requests';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-auth-modal',
  templateUrl: './client-auth-modal.component.html',
  styleUrls: ['./client-auth-modal.component.scss']
})
export class ClientAuthModalComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  loading = false;
  currentUser: Client;

  constructor(
    @Inject(MAT_DIALOG_DATA) public isRegister: boolean,
    private dialogRef: MatDialogRef<any>,
    private toastr: ToastrService,
    private clientAuth: AuthService
  ) { }

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15)
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15)
    ]),
    email: new FormControl('', [
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])
  });

  get firstname() {
    return this.form.get('firstname');
  }

  get lastname() {
    return this.form.get('lastname');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get password() {
    return this.form.get('password');
  }

  register() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
    if (this.form.valid) {
      const data: RegisterRequest = {
        firstname : this.firstname.value,
        lastname : this.lastname.value,
        email : this.email.value,
        phone : this.phone.value,
        password : this.password.value
      };
      this.clientAuth.register(data).then(() => {
        this.toastr.success('נרשם בהצלחה');
        this.loading = false;
        this.dialogRef.close();
      }, err => {
        this.toastr.error('הרשמנה נכשלה');
        this.loading = false;
      });
    } else {
      this.toastr.error('פרטים חסרים');
      this.loading = false;
    }
  }

  login() {
    this.loading = true;
    if (this.phone.valid && this.password.valid) {
      this.clientAuth.login({phone: this.phone.value, password: this.password.value}).then(() => {
        this.toastr.success('התחברת בהצלחה');
        this.loading = false;
        this.dialogRef.close();
      }, err => {
        this.toastr.error('ההתחברות נכשלה');
        this.loading = false;
      });
    } else {
      this.toastr.error('פרטים חסרים');
      this.loading = false;
    }
  }
}
