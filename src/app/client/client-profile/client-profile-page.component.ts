import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client/client';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';
import { Logo } from '../../models/logos/logos';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'angular-gallery';
import { LogosService } from '../../services/logos.service';
import { LoadingService } from '../../services/loading.service';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-client-profile-page',
  templateUrl: './client-profile-page.component.html',
  styleUrls: ['./client-profile-page.component.scss']
})

export class ClientProfilePageComponent implements OnInit {
  currentUser: Client;
  editTmpCurrentUser: Client;
  currentPage = 'About';
  edit = false;
  selectedFiles: FileList;
  imageSrc: string | ArrayBuffer = '../../../assets/img/defaultAvater.jpg';
  imageUrlBase = environment.logoUrlBase;
  logos: Logo[];
  logosGallery: {path: string}[];
  currentLogos: Logo[];
  logoText = '';
  showText = false;

  constructor(
    private rout: ActivatedRoute,
    private toastr: ToastrService,
    public authService: AuthService,
    private gallery: Gallery,
    private logoService: LogosService,
    private nmodelsService: ModelsService,
    private loadingService: LoadingService
  ) {
    this.authService.currentUser.subscribe(client => this.currentUser = client);
  }

  form = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [])
  });

  ngOnInit() {
    this.logos = this.rout.snapshot.data.logos;
    this.logosGallery = this.logos.map(logo => {
      return {path: this.imageUrlBase + logo.url};
    });
    this.nmodelsService.getActive().subscribe(res => {
      if (res && res.length > 0 && res[0].name.search('Text') >= 0) {
        this.showText = true;
      }
    });
  }

  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }

  get email() {
    return this.form.get('email');
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

  showGallery(index: number) {
    const prop = {
      images: this.logosGallery,
      index
    };
    this.gallery.load(prop);
  }

  createLogo() {
    this.loadingService.setLoading(true);
    const text = this.logoText = this.nmodelsService.activeModel.name.search('Text') >= 0 ? this.logoText : null;
    this.logoService.create(text).then(logos => {
      this.loadingService.setLoading(false);
      this.toastr.success('פעולה הושלמה, אל תשכח לדרג את הלוגו');
      this.currentLogos = logos;
      console.log(logos);
    }).catch(err => {
      this.loadingService.setLoading(false);
      this.toastr.success('פעולה נכשלה');
    });
  }

  logoSaved(logo) {
    this.logos = this.logos.concat(logo);
    this.logosGallery = this.logos.map(l => {
      return {path: this.imageUrlBase + l.url};
    });
  }
}
