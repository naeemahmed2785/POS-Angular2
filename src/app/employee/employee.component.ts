import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../core/employee.service';
import { IEmployee } from '../model/Employee.model';

@Component({
  // selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  pageTitle: string = 'Add New Employee';
  emp = {};
  message: string;
  isUpdating = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private empService: EmployeeService) { }

  ngOnInit() {
    // ngOnInit is a life cycle hook. 
    // it will be executed every time the component is loaded in the browser.
    const param = this._route.snapshot.paramMap.get('Id');
    console.log('checking value:: ', param);
    if (param) {
      // this + sign converts param variable into a number variable
      const empId = +param;
      this.empService.getEmployeeByid(empId)
        .subscribe((data) => {
          this.emp = data
          this.isUpdating = true;
        }, (error) => {
          this.message = error
        });
    }
  }

  SaveClicked() {
    if (this.isUpdating) {
      this.updateEmployee();
    } else {
      this.AddNewEmployee();
    }
  }

  AddNewEmployee() {
    this.empService.InsertEmployee(this.emp)
    .subscribe((data) =>{
      this.message = 'Record Added Successfully.';
    }, (error) => {
        this.message = 'an error occured while sumitting new record.';
    });
  }

  updateEmployee() {
    this.empService.updateEmployee(this.emp)
      .subscribe((data) => {
        this.message = 'Record updated successfully.';
      });
  }

}
