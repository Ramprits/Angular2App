import { Component, OnInit } from '@angular/core';
import { OrderService } from "./order.service";
import { IOrderListModule } from "./orderList.module";


@Component({
  templateUrl: './orderList.component.html',
  styleUrls: ['./orderList.component.css']
})
export class OrderListComponent implements OnInit {
  orderes: IOrderListModule[];
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this._orderService.GetOrders().subscribe(ordere => { this.orderes = ordere });
  }

}