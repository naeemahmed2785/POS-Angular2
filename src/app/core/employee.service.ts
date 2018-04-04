import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IEmployee } from "../model/Employee.model";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class EmployeeService {

    private apiUrl = 'http://localhost:63135/api/employee';

    constructor(private _http: HttpClient) {
    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(this.apiUrl)
            .catch(this.handleError);
    }

    getEmployeeByid(Id: number): Observable<IEmployee> {
        const theUrl = this.apiUrl + '/' + Id;
        return this._http.get<IEmployee>(theUrl)
        .catch(this.handleError);
    }

    InsertEmployee(emp): Observable<any> {
        return this._http.post<IEmployee>(this.apiUrl, emp);
    }

    updateEmployee(emp): Observable<any> {
        return this._http.put<IEmployee>(this.apiUrl ,emp);
    }

    deleteEmployee(Id: number): Observable<any> {
        return this._http.delete<IEmployee>(this.apiUrl + '/' + Id);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}