import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
products=[
  {
    brand:"Nokia",
    type:"mobile",
    price:20000
  },
  {
    brand:"MI",
    type:"mobile",
    price:30000
  
  },
  {
    brand:"LG",
    type:"Fridge",
    price:40000
  
  }
  
];
}
