import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import 'rxjs/add/operator/do'
import { IEmployee } from "./employee.module";

@Injectable()
export class EmployeeListService {

    private baseURL = 'src/app/common/Employees.json'
    constructor(private _http: Http) { }

    GetEmployees(): Observable<IEmployee[]> {

        return this._http.get(this.baseURL)
            .map((response: Response) => {
                return <IEmployee[]>response.json();
            }).catch(this.handleError)
    }


    GetEmployee(EmployeeID: number): Observable<IEmployee> {

        return this._http.get(this.baseURL + EmployeeID)
            .map((response: Response) => {
                return <IEmployee>response.json();
            }).catch(this.handleError)
    }



    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }

}

