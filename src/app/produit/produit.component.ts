import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  cartItems: any = [0];
  productList: any[] = []
  cart: any[] = []
  product: any[] = []

  constructor(private productService: ProduitService) { }

  ngOnInit(): void {

    this.productService.getProduct().subscribe({
      next: (res) => {
        this.productList = res
      },
      error: (error) => {
        console.log(error);
      },


    }
    )
    this.cartItems = JSON.parse(localStorage.getItem("cartItems") || '');
  }




  addToCart(item: any) {
    console.log(item)
    this.cartItems = Number(this.cartItems + 1)
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));


    // get product by serie
    let product;
    for (let i = 0; i < this.productList.length; i++) {
      const prod = this.productList[i];
      if (prod.serie == item) {
        product = prod;
        break;
      }
    }
    // let product = this.productList.find((prod) => { return prod.serie == item })
    console.log(product)
    // add product to 
    let productInCart = this.cart.find((prod) => { return prod.serie == item })
    console.log(productInCart)

    if (productInCart == null) {
      product.qte = 1
      this.cart.push(product)
      console.log(product)
    } else {
      let index = this.cart.indexOf(productInCart)
      this.cart[index].qte++
    }

    localStorage.setItem('cart', JSON.stringify(this.cart))


  }




}


