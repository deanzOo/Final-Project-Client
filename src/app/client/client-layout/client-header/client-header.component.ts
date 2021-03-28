import { Component, Inject, OnInit } from '@angular/core';
import { Client } from '../../../models/client/client';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ClientAuthModalComponent } from '../../login-modal/client-auth-modal.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  currentUser: Client;

  constructor(
    @Inject(DOCUMENT) public document,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(client => {
      console.log(client);
      this.currentUser = client;
    });
  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }

  login() {
    this.dialog.open(ClientAuthModalComponent, {
      width: '250px',
      data: false
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  register() {
    this.dialog.open(ClientAuthModalComponent, {
      width: '250px',
      data: true
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
