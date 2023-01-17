import { Component, OnInit } from '@angular/core';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string;
 
  constructor(private prduct: ProductService) { }

  ngOnInit(): void {

    this.list();

  }
  deleteproduct(id: number) {
    this.prduct. deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted!'
        this.list();
      }
    });
    setTimeout(() => {

      this.productMessage = undefined
    }, 3000)

  }
  list() {

    this.prduct.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    })
  }

}
