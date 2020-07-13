import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  public Firstname;
  public Lastname;
  public Position;
  public Office;
  public Age;
  public Startdate;
  public Salary;
  public Extn;
  public Email;
  public Image;
  public id = this.rs.getId();


  constructor(private rs:RestService, private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.rs.getUsers().subscribe((item)=>{
      for(let i=0;i<item.length;i++){
        if(this.id==item[i].id){
          this.Firstname=item[i].Firstname;
          this.Lastname=item[i].Lastname;
          this.Position=item[i].Position;
          this.Office=item[i].Office;
          this.Age=item[i].Age;
          this.Startdate=item[i].Startdate;
          this.Salary=item[i].Salary;
          this.Extn=item[i].Extn;
          this.Email=item[i].Email;
          this.Image=item[i].Image;
        }
      }
     });
}
back(){
  this.router.navigate(['/']);
  // this.getAllOwners();
}

}
