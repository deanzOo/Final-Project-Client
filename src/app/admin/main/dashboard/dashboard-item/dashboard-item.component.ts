import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() color: string;
  @Input() amount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
