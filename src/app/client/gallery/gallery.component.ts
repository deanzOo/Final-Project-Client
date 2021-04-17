import { Component } from '@angular/core';
import { Logo } from '../../models/logos/logos';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Gallery } from 'angular-gallery';
import { MatDialog } from '@angular/material/dialog';
import { RateLogoComponent } from './rate-logo/rate-logo.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  logos: Logo[];
  logosGallery: {path: string}[];
  imageUrlBase = environment.logoUrlBase;

  constructor(
    private rout: ActivatedRoute,
    private gallery: Gallery,
    private dialog: MatDialog,
  ) {
    this.logos = this.rout.snapshot.data.logos;
    this.logosGallery = this.logos.map(logo => {
      return {path: this.imageUrlBase + logo.url};
    });
  }

  showGallery(index: number) {
    const prop = {
      images: this.logosGallery,
      index
    };
    this.gallery.load(prop);
  }

  rateLogo(logo) {
    this.dialog.open(RateLogoComponent, {
      width: '250px',
      data: {logo}
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
