import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import { ISupplier } from './Supplier.module'
@Injectable()
export class SupplierService {
     private _supplierURL = 'src/app/common/Suppliers.json'
     constructor(private _http: Http) { }

     GetSuppliers(): Observable<ISupplier[]> {
          return this._http.get(this._supplierURL)
               .map((response: Response) => <ISupplier[]>response.json())
               .do(data => console.log('All :' + JSON.stringify(data))).catch(this.handleError);
     }
     private handleError(error: Response) {
          console.error(error);
          return Observable.throw(error.json().error || 'Server error')
     }

}