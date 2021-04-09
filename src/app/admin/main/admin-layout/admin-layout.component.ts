import { Component, OnInit } from '@angular/core';
import { MenuLink } from '../../../models/admin/dashboardItem';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  navBar: MenuLink[] = [
    {
      title: 'מסך ראשי',
      link: 'dashboard',
      icon: 'dashboard'
    },
    {
      title: 'מודלים',
      link: 'models',
      icon: 'language'
    },
    {
      title: 'משתמשים',
      link: 'users',
      icon: 'supervisor_account'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
