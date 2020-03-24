import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/service/orderService/order.service';
import {OderModel} from '../../shared/model/oder.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  private orders: OderModel[];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe((orders: OderModel[]) => {
      this.orders = orders;
      console.log(this.orders);
    });
  }
}
