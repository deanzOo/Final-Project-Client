import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UsersService } from '../../../services/users.service';
import { Client } from '../../../models/client/client';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'phone', 'isAdmin', 'action'];
  dataSource: MatTableDataSource<Client>;
  users: Client[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private toastr: ToastrService,
    private rout: ActivatedRoute
    ) { }

  ngOnInit() {
    this.users = this.rout.snapshot.data.users;
    this.dataSource = new MatTableDataSource<Client>(this.users);
  }

  delete(id: number) {
    if (this.authService.currentUser.value.id === id) {
      this.toastr.error('אין אפשרות למחוק את עצמך');
      return;
    }
    this.userService.delete(id).then(() => {
      this.users = this.users.filter(user => user.id !== id);
      this.toastr.success('הפעולה הושלמה בהצלחה');
    }).catch(() => {
      this.toastr.error('הפעולה נכשלה');
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
