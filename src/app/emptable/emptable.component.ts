import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Users } from '../../Users';
import { RestService } from './../rest.service';
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
// import { MatTableModule} from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EmpdetailComponent } from '../empdetail/empdetail.component';
// import { MatDialog } from '@angular/material/dialog';

// import { Sort } from '@angular/material/sort';
// import { MatInputModule } from '@angular/material/input';
// import {NgxPaginationModule} from 'ngx-pagination';
// import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
// import { MaterialModule } from './../material/material.module';



@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})
export class EmptableComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['Firstname', 'Lastname', 'Position', 'Office', 'Age', 'Startdate', 'Salary', 'Extn', 'Email', 'details', 'delete'
];
  public dataSource = new MatTableDataSource<Users>();
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router, private rs : RestService) {}
   
  
  ngOnInit(): void {
    // this.rs.getUsers();
    this.getAllOwners();
  }

  public getAllOwners = () => {
    this.rs.getUsers()
    .subscribe(res => {
      this.dataSource.data = res as Users[];
    })
  }
 
  public userDetail = (id: number) => {
    this.rs.setId(id);
    console.log(id);
    this.router.navigate(["/empdetail"]);    
    // this.dialog.open(EmpdetailComponent);
  }
 
  userDelete(id: number){
    if(window.confirm('Are you sure ?')){
      this.rs.delUser(id).subscribe(data=>{
        alert("user has been deleted successfully"),
        this.getAllOwners();
      })
    }
  }
 
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  addEmp(){
    this.router.navigate(['/addemp']);
    this.getAllOwners();
  }
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


}
