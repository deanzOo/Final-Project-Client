import { Component, OnInit } from '@angular/core';
import { Dashboard, MenuLink } from '../../../models/admin/dashboard';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  navBar: MenuLink[] = [
    {
      title: 'Dashboard',
      link: 'dashboard'
    },
    {
      title: 'Models',
      link: 'models'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
