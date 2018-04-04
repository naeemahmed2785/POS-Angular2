import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/employee.service';
import { IEmployee } from '../model/Employee.model';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  errorMessage: string;
  pageTitle: string = 'Search Employee'
  employees: IEmployee[] = [];
  firstName: string;
  surName: string;
  dob: Date;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }

  search() {
    this.service.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
      }, error => this.errorMessage = <any>error);
  }

  onDelete(Id) {
    this.service.deleteEmployee(Id)
      .subscribe((data) => {
        this.search();
      });
  }
  
}
