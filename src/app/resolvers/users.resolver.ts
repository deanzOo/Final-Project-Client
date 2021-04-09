import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Client } from '../models/client/client';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserResolver implements Resolve<Client[]> {

  constructor(private userService: UsersService) {}

  resolve() {
    return this.userService.get();
  }
}
