import { AfterViewInit, Component } from '@angular/core';
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
export class GalleryComponent implements AfterViewInit{
  logos: Logo[];
  currentViewLogos: Logo[];
  logosGallery: {path: string}[];
  imageUrlBase = environment.logoUrlBase;
  pages = 0;

  constructor(
    private rout: ActivatedRoute,
    private gallery: Gallery,
    private dialog: MatDialog,
  ) {
    this.logos = this.rout.snapshot.data.logos.reverse();
    this.pages = Math.ceil(this.logos.length / 15);
    this.currentViewLogos = this.logos.slice(0, 10);
    this.logosGallery = this.logos.map(logo => {
      return {path: this.imageUrlBase + logo.url};
    });
  }

  ngAfterViewInit() {
    console.log('All resources finished loading!');
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
      data: {logo}
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  changePage(data) {
    const start = data.pageIndex * data.pageSize;
    this.currentViewLogos = this.logos.slice(start, start + data.pageSize);
  }

}
