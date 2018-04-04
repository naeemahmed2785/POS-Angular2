import { Component, OnInit } from '@angular/core';
import { ICustomer} from '../model/customer.model';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  abc = {};
  
  constructor() { }

  ngOnInit() {
  }

}
