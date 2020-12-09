import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../../models/admin/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardStat: Dashboard[] = [
    {
      title: 'Dor',
      icon: 'leaderboard',
      amount: 21566,
      color: 'black'
    },
    {
      title: 'Ofek',
      icon: 'person',
      amount: 67876,
      color: '#156498'
    },
    {
      title: 'Dean',
      icon: 'leaderboard',
      amount: 345345,
      color: 'red'
    },
    {
      title: 'models',
      icon: 'leaderboard',
      amount: 234234
    },
    {
      title: 'models',
      icon: 'leaderboard',
      amount: 345345
    },
    {
      title: 'models',
      icon: 'leaderboard',
      amount: 234234
    },
    {
      title: 'models',
      icon: 'leaderboard',
      amount: 345345
    },
    {
      title: 'models',
      icon: 'leaderboard',
      amount: 234234
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
