import { Component, OnInit } from '@angular/core';
import { ProductService } from './Product.service';
import { IProducts } from "./Product.module";

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {
  Products: IProducts[]
  constructor(private _product: ProductService) { }

  ngOnInit() {
    this._product.GetProducts().subscribe(Products => { this.Products = Products })
  }

}