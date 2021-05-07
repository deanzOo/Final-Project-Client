import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ModelsService } from '../services/models.service';
import { Model } from '../models/models/models';

@Injectable()
export class ModelsResolver implements Resolve<Model[]> {

  constructor(private modelService: ModelsService) {}

  resolve() {
    return this.modelService.get();
  }
}
