import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: any;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getAll()
      .then(response => {
        this.items = response;
      })

    // this.itemsService.getByCategory('ipad')
    //   .then(response => {
    //     console.log(response);
    //   })
  }

  onChange($event) {
    console.log($event.target.value);
    this.itemsService.getByCategory($event.target.value)
      .then(response => {
        this.items = response;
      })
  }

  onClickComprar(pId) {
    if (localStorage.getItem('token')) {
      this.itemsService.insertProduct(pId).then(response => console.log(response));
    } else {
      this.itemsService.createCart()
        .then(response => {
          localStorage.setItem('token', response['token_cart']);
          this.itemsService.insertProduct(pId).then(response => console.log(response));
        })
    }
  }

}
