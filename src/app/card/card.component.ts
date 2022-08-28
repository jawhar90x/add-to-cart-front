import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cartItems: any = [0];
  cartList: any = [] = []
  produictsList: any = [] = []
  totalPrice: any = 0;
  cartNumber: any;

  constructor() { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems") || '');
    this.cartList = JSON.parse(localStorage.getItem("cart")!);


    for (let i = 0; i < this.cartList.length; i++) {
      this.totalPrice += this.cartList[i].prix * this.cartList[i].qte
    }
  }



  add(item: any) {
    let products = this.cartList.find((prod: { serie: any; }) => { return prod.serie == item.serie })
    products.qte++
    this.produictsList.push(products)
    localStorage.setItem('cart', JSON.stringify(this.produictsList))
  }
  moin(item: any) {
    let products = this.cartList.find((prod: { serie: any; }) => { return prod.serie == item.serie })
    if (products.qte > 1) {
      products.qte--
      this.produictsList.push(products)
      localStorage.setItem('cart', JSON.stringify(this.produictsList))
    }
    else {
      alert("le qte min = 1")
    }
  }


  removeitem(item: any) {
    let products = this.cartList.find((prod: { serie: any; }) => { return prod.serie == item.serie })
    let index = this.cartList.indexOf(products)

    this.cartNumber = Number(this.cartNumber) - this.produictsList[index].qte
    localStorage.setItem('cart', this.cartNumber)
    this.produictsList.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(this.produictsList))

  }

}





