import { Component, OnInit } from '@angular/core';

import { SupplierService } from './Supplier.service'
import { ISupplier } from "./Supplier.module";
@Component({
  selector: 'app-Supplier',
  templateUrl: './Supplier.component.html',
  styleUrls: ['./Supplier.component.css']
})
export class SupplierComponent implements OnInit {
  Suppliers: ISupplier[]
  constructor(private _supplierService: SupplierService) { }

  ngOnInit() {
    this._supplierService.GetSuppliers().subscribe(suppliers => { this.Suppliers = suppliers })
  }

}