import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { Model } from '../../../models/models/models';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ModelsService } from '../../../services/models.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: MatTableDataSource<Model>;
  models: Model[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private modelsService: ModelsService,
    private authService: AuthService,
    private toastr: ToastrService,
    private rout: ActivatedRoute
  ) { }

  ngOnInit() {
    this.models = this.rout.snapshot.data.models;
    this.dataSource = new MatTableDataSource<Model>(this.models);
    this.checkActive();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  setActive(id: number) {
    this.modelsService.set(id).then(() => {
      this.checkActive();
    }).catch(err => {
      console.log(err);
    });
  }

  checkActive() {
    this.modelsService.getActive().subscribe((res) => {
        const idx = this.models.findIndex(m => m.id === res[0].id);
        if (idx >= 0) {
          this.models.map(m => m.active = false);
          this.models[idx].active = true;
          this.dataSource = new MatTableDataSource(this.models);
          this.toastr.success('מודל נבחר בהצלחה');
        }
    },
      error => {
        console.log(error);
        this.toastr.error('שגיאה במציאת מודל פעיל');
    });
  }

}
