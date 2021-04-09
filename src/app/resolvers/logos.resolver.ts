import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LogosService } from '../services/logos.service';
import { Logo } from '../models/logos/logos';

@Injectable()
export class LogosResolver implements Resolve<Logo[]> {

  constructor(private logosService: LogosService) {}

  resolve() {
    return this.logosService.get();
  }
}
