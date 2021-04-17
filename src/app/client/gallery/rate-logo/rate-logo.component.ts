import { Component, Inject } from '@angular/core';
import { LogosService } from '../../../services/logos.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../../../services/loading.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Logo } from '../../../models/logos/logos';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-rate-logo',
  templateUrl: './rate-logo.component.html',
  styleUrls: ['./rate-logo.component.scss']
})
export class RateLogoComponent {
  colorsRate: number;
  sharpnessRate: number;
  shapeRate: number;
  imageUrlBase = environment.logoUrlBase;

  constructor(
    private logoService: LogosService,
    private toastr: ToastrService,
    private loadingService: LoadingService,
    @Inject(MAT_DIALOG_DATA) public data: {logo: Logo}
  ) { }

  rateLogo() {
    this.loadingService.setLoading(false);
    this.logoService.rate({
      logo_id: this.data.logo.id,
      colors_rate: this.colorsRate,
      sharpness_rate: this.sharpnessRate,
      shape_rate: this.shapeRate,
    }).then(() => {
      this.loadingService.setLoading(false);
      this.toastr.success('דירוג נקלט בהצלחה');
      this.data.logo.rated = true;
    }).catch(err => {
      console.log(err);
      this.loadingService.setLoading(false);
      this.toastr.error('הפעולה נכשלה');
    });
  }

}
