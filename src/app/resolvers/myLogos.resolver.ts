import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LogosService } from '../services/logos.service';
import { Logo } from '../models/logos/logos';

@Injectable()
export class MyLogosResolver implements Resolve<Logo[]> {

  constructor(private logosService: LogosService) {}

  resolve() {
    return this.logosService.get({my_logos: 1, saved: 1});
  }
}
