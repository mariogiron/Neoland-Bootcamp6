import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsCart: any

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getCart()
      .then(response => {
        this.itemsCart = response
      })
  }

}
