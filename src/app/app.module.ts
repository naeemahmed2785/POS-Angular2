import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './core/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { CustomersComponent } from './customers/customers.component';
// import { BsDropdownModule } from 'ngx-bootstrap';


const routes: Routes = [
  { path: 'searchemployee', component: SearchemployeeComponent },
  { path: 'addnewemployee', component: EmployeeComponent },
  { path: 'addnewemployee/:Id', component: EmployeeComponent },
  { path: 'customer', component: CustomersComponent }
  
  // {path: 'customer', component: AppComponent},
  // {path: 'managecategories', component: AppComponent},
  // {path: 'manageitem', component: AppComponent},
  // {path: 'orders', component: AppComponent},
  // {path: 'reports', component: AppComponent},
  // {path: 'login', component: AppComponent},
  // {path: 'customersign-up', component: AppComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    SearchemployeeComponent,
    NavbarComponent,
    EmployeeComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
