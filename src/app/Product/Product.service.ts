import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'


import { IProducts } from './Product.module'

@Injectable()
export class ProductService {
     private _productURL = 'src/app/common/Products.json'

     constructor(private _http: Http)
     { }
     GetProducts(): Observable<IProducts[]> {
          return this._http.get(this._productURL)
               .map((response: Response) => <IProducts[]>response.json())
               .do(data => console.log('All :'+ JSON.stringify(data))).catch(this.handleError);
     }
     private handleError(error:Response)
     {
          console.error(error);
          return Observable.throw(error.json().error || 'Server error')
     }

}