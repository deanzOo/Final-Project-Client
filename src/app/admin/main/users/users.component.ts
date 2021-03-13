import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

const ELEMENT_DATA: any[] = [
  {active: false, id: 1, name: 'משתמש בדיקה 1', logos: 30, created_at: '2019-08-10'},
  {active: false, id: 2, name: 'משתמש בדיקה 2', logos: 24, created_at: '2019-08-19'},
  {active: false, id: 3, name: 'משתמש בדיקה 3', logos: 25, created_at: '2019-09-13'},
  {active: true, id: 4, name: 'משתמש בדיקה 4', logos: 16, created_at: '2019-11-12'},
  {active: false, id: 5, name: 'משתמש בדיקה 5', logos: 40, created_at: '2019-08-28'}
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'logos', 'created_at', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
