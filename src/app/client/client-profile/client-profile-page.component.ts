import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client/client';


@Component({
  selector: 'app-client-profile-page',
  templateUrl: './client-profile-page.component.html',
  styleUrls: ['./client-profile-page.component.scss']
})

export class ClientProfilePageComponent implements OnInit {
  currentUser: Client = {
    id: 12,
    firstname: 'Dor',
    lastname: 'Shoshan',
    email: 'dor.shoshan12@gmail.com',
    phone: '0546484372',
    avatar: ''
  };
  editTmpCurrentUser: Client;
  currentPage = 'About';
  edit = false;
  selectedFiles: FileList;
  imageSrc: string | ArrayBuffer;

  constructor(
    private toastr: ToastrService) { }

  form = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [])
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

  ngOnInit() {
  }

  upload() {
    // return new Promise<boolean>((resolve, reject) => {
    //   if (this.selectedFiles && this.selectedFiles.item) {
    //     const file = this.selectedFiles.item(0);
    //     console.log('file', file);
    //     const name = this.editTmpCurrentUser.id + 'Avatar.' + file.name.split('.')[file.name.split('.').length - 1];
    //     if (file.type.indexOf('image') < 0) {
    //       reject('סוג קובץ לא חוקי');
    //     }
    //     this.uploadService.uploadFile(file, name).then((res) =>  {
    //       this.editTmpCurrentUser.avatar = name;
    //       resolve();
    //     }, () => {
    //       reject('העלאת קובץ נכשלה');
    //     });
    //   } else {
    //     this.editTmpCurrentUser.avatar = '';
    //     resolve();
    //   }
    // });
  }

  save() {
    this.editTmpCurrentUser = {...this.currentUser};
    // this.upload().then(() => {
    //   this.editTmpCurrentUser.hobbies = 0 +
    //     (this.currentHobbies.Travelling ?  UserHobbies.Travelling : 0) +
    //     (this.currentHobbies.Driving ?  UserHobbies.Driving : 0) +
    //     (this.currentHobbies.Photography ?  UserHobbies.Photography : 0) +
    //     (this.currentHobbies.Gaming ?  UserHobbies.Gaming : 0) +
    //     (this.currentHobbies.Music ?  UserHobbies.Music : 0) +
    //     (this.currentHobbies.Surfing ?  UserHobbies.Surfing : 0) +
    //     (this.currentHobbies.Foodie ?  UserHobbies.Foodie : 0) +
    //     (this.currentHobbies.TV ?  UserHobbies.TV : 0) +
    //     (this.currentHobbies.Shopping ?  UserHobbies.Shopping : 0) +
    //     (this.currentHobbies.Social ?  UserHobbies.Social : 0) +
    //     (this.currentHobbies.Reading ?  UserHobbies.Reading : 0) +
    //     (this.currentHobbies.Sport ?  UserHobbies.Sport : 0) +
    //     (this.currentHobbies.Computers ?  UserHobbies.Computers : 0) +
    //     (this.currentHobbies.Camping ?  UserHobbies.Camping : 0);
    //   this.editTmpCurrentUser.email = this.email.value;
    //   this.editTmpCurrentUser.name = this.name.value;
    //   this.editTmpCurrentUser.gender = this.gender.value;
    //   try {
    //     this.editTmpCurrentUser.birthday = this.birthday.value.toISOString().split('T')[0];
    //   } catch {
    //     this.editTmpCurrentUser.birthday = '';
    //   }
    //   this.userService.editUser(this.editTmpCurrentUser).subscribe(result => {
    //     this.editTmpCurrentUser.avatar = this.editTmpCurrentUser.avatar !== '' ?
    //       'https://s3-eu-west-1.amazonaws.com/files.doggiehunt/userImages/' + this.editTmpCurrentUser.avatar : this.currentUser.avatar;
    //     this.userService.currentUser.next(this.editTmpCurrentUser);
    //     this.toastr.success('משתמש עודכן בהצלחה');
    //     this.edit = false;
    //   }, err => {
    //     this.toastr.error('עדכון משתמש נכשל');
    //   });
    // }, err => {
    //   this.toastr.error(err);
    // });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0)) {
      const file = this.selectedFiles.item(0);
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

  showPage(page: string) {
    this.currentPage = page;
  }

  startEdit() {
    this.form.reset();
    this.firstname.setValue(this.currentUser.firstname);
    this.email.setValue(this.currentUser.email);
    this.edit = !this.edit;
  }

}
