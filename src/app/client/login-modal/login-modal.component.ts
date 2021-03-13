import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client/client';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  loading = false;
  setValidationCode = false;
  currentUser: Client;

  constructor(
    @Inject(MAT_DIALOG_DATA) public isRegister: boolean,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<any>
  ) { }

  form = new FormGroup({
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15)
    ]),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ])
  });

  get phone() {
    return this.form.get('phone');
  }

  get code() {
    return this.form.get('code');
  }

  sendSms() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
    // if (this.phone.valid) {
    //   this.userService.sendSms({phone: this.phone.value, user_type: this.userChoose}).then(() => {
    //     this.loading = false;
    //     this.toastr.success('קוד אימות נשלח לנייד');
    //     this.setValidationCode = true;
    //   }, err => {
    //     this.toastr.error('לא היית אפשרות לשלוח קוד אימות');
    //     this.loading = false;
    //   });
    // } else {
    //   this.toastr.error('מספר טלפון לא תקין');
    //   this.loading = false;
    // }
  }

  checkCode() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
    // if (this.code.valid) {
    //   this.userService.checkSms(this.phone.value, this.code.value).then(() => {
    //     this.userService.login().then(() => {
    //       this.loading = false;
    //       this.toastr.success('ברוך הבא ' + this.currentUser.name);
    //       this.dialogRef.close(true);
    //     }, err => {
    //       this.toastr.error('התחברות נכשלה');
    //       this.loading = false;
    //     });
    //   }, err => {
    //     this.toastr.error('קוד אימות לא תקין');
    //     this.loading = false;
    //   });
    // } else {
    //   this.toastr.error('קוד אימות לא תקין');
    //   this.loading = false;
    // }
  }

  ngOnInit(): void {
  }

}
