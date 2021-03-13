import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';

const ELEMENT_DATA: any[] = [
  {active: false, id: 1, name: 'מודל ראשוני', time: 30.6, created_at: '2019-08-10'},
  {active: false, id: 2, name: 'מודל בדיקה', time: 24.6, created_at: '2019-08-19'},
  {active: false, id: 3, name: 'המודל הצגה', time: 25.6, created_at: '2019-09-13'},
  {active: true, id: 4, name: 'מודל בדיקה', time: 16.6, created_at: '2019-11-12'},
  {active: false, id: 5, name: 'מודל בדיקה 2', time: 40.6, created_at: '2019-08-28'}
];

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'time', 'created_at', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor(private toastr: ToastrService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  setActive(id: number) {
    console.log('set active: ', id);
    const idx = ELEMENT_DATA.findIndex(e => e.id === id);
    if (idx >= 0) {
      ELEMENT_DATA.map(e => e.active = false);
      ELEMENT_DATA[idx].active = true;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.toastr.success('מודל נבחר בהצלחה');
    }
  }

}
