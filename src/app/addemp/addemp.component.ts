import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { RestService } from '../data.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private router: Router, private fb:FormBuilder, private rs:RestService ) { }

  form = this.fb.group({
    Firstname: [''],
    Lastname: [''],
    Position:[''],
    Office:[''],
    Age:[''],
    Startdate:[''],
    Salary:[''],
    Extn:[''],
    Email:['']
  });


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
    this.rs.addUser(this.form.value)
    .subscribe(
      response => console.log('success',response),
      error => console.log('error',error)
      )
      this.router.navigate(['/']);
  }

}
