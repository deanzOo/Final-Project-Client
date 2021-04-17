import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Logo } from '../../../models/logos/logos';
import { LogosService } from '../../../services/logos.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../../../services/loading.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-logo-card',
  templateUrl: './logo-card.component.html',
  styleUrls: ['./logo-card.component.scss']
})
export class LogoCardComponent implements OnInit {
  @Input() logo: Logo;
  @Input() title: string;
  @Output() savedLogo = new EventEmitter(false);
  imageUrlBase = environment.logoUrlBase;
  colorsRate: number;
  sharpnessRate: number;
  shapeRate: number;

  constructor(
    private logoService: LogosService,
    private toastr: ToastrService,
    private loadingService: LoadingService
    ) {}

  ngOnInit(): void {
  }

  rateLogo() {
    this.loadingService.setLoading(false);
    this.logoService.rate({
      logo_id: this.logo.id,
      colors_rate: this.colorsRate,
      sharpness_rate: this.sharpnessRate,
      shape_rate: this.shapeRate,
    }).then(() => {
      this.loadingService.setLoading(false);
      this.toastr.success('דירוג נקלט בהצלחה');
      this.logo.rated = true;
    }).catch(err => {
      console.log(err);
      this.loadingService.setLoading(false);
      this.toastr.error('הפעולה נכשלה');
    });
  }

  saveLogo() {
    this.loadingService.setLoading(false);
    this.logoService.save(this.logo.id).then(() => {
      this.loadingService.setLoading(false);
      this.toastr.success('לוגו נשמר בהצלחה');
      this.logo.rated = false;
      this.logo.saved = true;
      this.savedLogo.emit(this.logo);
    }).catch(err => {
      console.log(err);
      this.loadingService.setLoading(false);
      this.toastr.error('הפעולה נכשלה');
    });
  }
}
