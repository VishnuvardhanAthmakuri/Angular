import { Component ,OnInit} from '@angular/core';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{
  
  addProductMeassge:string|undefined

constructor(private product:ProductService){ /* TODO document why this constructor is empty */ }
  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  submit(data:product){
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.addProductMeassge="Product is added succesfully!"
      }
    })
    setTimeout(()=>{
      this.addProductMeassge=undefined
    },3000)
  }
  
}



