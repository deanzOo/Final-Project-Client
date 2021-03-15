import { Component, Inject, OnInit } from '@angular/core';
import { Client } from '../../../models/client/client';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ClientAuthModalComponent } from '../../login-modal/client-auth-modal.component';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  currentUser: Client;

  constructor(@Inject(DOCUMENT) public document,
              private dialog: MatDialog) { }

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
    // this.userAuth.logout();
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
